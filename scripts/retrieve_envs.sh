SSM_PATH = "/mypage/env"
OUTPUT_FILE = ".env"
AWS_REGION = "ap-southeast-2"

> "$OUTPUT_FILE" # Clear the output file

aws ssm get-parameters-by-path \
  --path "$SSM_PATH" \
  --with-decryption \
  --query "Parameters[*].{Name:Name,Value:Value}" \
  --region your-region \
  --output text |
  while read name value; do
    # Extract the key without the path prefix
    key=$(basename "$name")
    # Extract the value into output file
    echo "$key=\"$value\"" >> "$OUTPUT_FILE"
  done

chmod 600 "$OUTPUT_FILE" # Set permissions to read/write for the owner only
chown $USER:$USER "$OUTPUT_FILE" # Change ownership to the current user