# This script is run before the installation of the package.
# It is used to retrieve the environment variables from AWS Systems Manager Parameter Store.
# and writes them to a .env file in the current directory.

# Create and set permissions for the .env file
cd /deployments/my-page
if [ -f .env ]; then
  > ".env" # Clear the existing .env file if it exists
else
  sudo touch ".env" # Create the .env file if it doesn't exist
fi

sudo chmod 600 ".env" # Set permissions to read/write for the owner only
sudo chown $USER:$USER ".env" # Change ownership to the current user

# Retrieve secrets from AWS SSM Parameter Store
# and write them to the .env file
aws ssm get-parameters-by-path \
  --path "/mypage/env" \
  --with-decryption \
  --query "Parameters[*].{Name:Name,Value:Value}" \
  --region ap-southeast-2 \
  --output text | 
  while read name value; do
    # Extract the key without the path prefix
    key=$(basename "$name")
    # Extract the value into output file
    echo "$key=\"$value\"" >> ".env"
  done