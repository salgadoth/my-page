# Create and set permissions for the .env file
sudo touch "../.env" # Create the .env file if it doesn't exist
sudo chmod 600 "../.env" # Set permissions to read/write for the owner only
sudo chown $USER:$USER "../.env" # Change ownership to the current user

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
    echo "$key=\"$value\"" >> "../.env"
  done