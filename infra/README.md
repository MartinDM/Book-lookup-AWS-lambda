# Martin REST API

A serverless REST API built with Python and AWS Lambda, deployed using Terraform infrastructure as code.

## 🏗️ Architecture

This project deploys a serverless REST API using:

- **AWS Lambda** - Serverless compute for API logic
- **API Gateway** - REST API endpoint management
- **CloudWatch** - Logging and monitoring
- **Terraform** - Infrastructure as Code
- **Python 3.9** - Runtime environment

## 📁 Project Structure

```
martin-rest-api/
├── index.py           # Lambda function code
├── main.tf            # Terraform infrastructure configuration
├── variables.tf       # Terraform input variables
├── outputs.tf         # Terraform output values
└── README.md          # Project documentation
```

## 🚀 Quick Start

### Prerequisites

- [Terraform](https://www.terraform.io/downloads.html) >= 1.0
- [AWS CLI](https://aws.amazon.com/cli/) configured with appropriate credentials
- Python 3.9+ (for local development)

### Deployment Steps

1. **Initialise**

   ```bash
   terraform init
   ```

2. **Review the deployment plan:**

   ```bash
   terraform plan
   ```

3. **Deploy the infrastructure:**

   ```bash
   terraform apply
   ```

## 🔧 Configuration

### Terraform Variables

You can customize the deployment by modifying variables in `variables.tf` or creating a `terraform.tfvars` file:

```hcl
# terraform.tfvars
aws_region     = "us-west-2"
project_name   = "my-custom-api"
api_stage_name = "dev"
python_runtime = "python3.11"
lambda_timeout = 60
lambda_memory  = 512

lambda_environment_variables = {
  ENVIRONMENT = "development"
  LOG_LEVEL   = "DEBUG"
  API_VERSION = "v1"
}
```

### Key Configuration Options

| Variable         | Description                            | Default           |
| ---------------- | -------------------------------------- | ----------------- |
| `aws_region`     | AWS region for deployment              | `us-east-1`       |
| `project_name`   | Project name (used in resource naming) | `martin-rest-api` |
| `api_stage_name` | API Gateway stage name                 | `prod`            |
| `python_runtime` | Python runtime version                 | `python3.9`       |
| `lambda_timeout` | Lambda timeout in seconds              | `30`              |
| `lambda_memory`  | Lambda memory in MB                    | `256`             |

## 📋 API Endpoints

The API Gateway is configured with proxy integration, meaning your Lambda function handles all routes. Currently available:

- **GET /** - Returns "Hello from Lambda!"
- **ANY /{proxy+}** - All other routes are handled by the Lambda function

### Example Usage

```bash
# Test the API
curl https://your-api-url.amazonaws.com/prod

# Response
{
  "statusCode": 200,
  "body": "Hello from Lambda!"
}
```

## 🛠️ Development

### Local Development

To test your Lambda function locally:

```python
# Run handler.py locally
python3 handler.py
```

### Adding New Endpoints

Modify `handler.py` to add new API endpoints:

```python
import json

def lambda_handler(event, context):
    # Get HTTP method and path
    http_method = event.get('httpMethod', '')
    path = event.get('path', '')

    # Route handling
    if http_method == 'GET' and path == '/health':
        return {
            'statusCode': 200,
            'body': json.dumps({'status': 'healthy'})
        }
    elif http_method == 'POST' and path == '/users':
        # Handle user creation
        body = json.loads(event.get('body', '{}'))
        return {
            'statusCode': 201,
            'body': json.dumps({'message': 'User created', 'data': body})
        }

    # Default response
    return {
        'statusCode': 200,
        'body': json.dumps({'message': 'Hello from Lambda!'})
    }
```

### Environment Variables

Access environment variables in your Lambda function:

```python
import os

def lambda_handler(event, context):
    environment = os.environ.get('ENVIRONMENT', 'production')
    log_level = os.environ.get('LOG_LEVEL', 'INFO')

    # Your logic here
```

## 📊 Monitoring and Logging

### CloudWatch Logs

Logs are automatically sent to CloudWatch. View them in the AWS Console or use the CLI:

```bash
# Get log group name
terraform output cloudwatch_log_group_name

# View recent logs
aws logs tail /aws/lambda/martin-rest-api-api --follow
```

### X-Ray Tracing

Enable X-Ray tracing by setting the variable:

```hcl
enable_xray_tracing = true
```

## 🔐 Security

### IAM Permissions

The Lambda function runs with minimal required permissions:

- CloudWatch Logs creation and writing
- Basic Lambda execution role

### API Gateway

Currently configured with:

- No authentication (public API)
- CORS enabled for web applications
- Regional endpoint configuration

For production, consider adding:

- API Keys
- AWS Cognito authentication
- Request validation
- Rate limiting

## 💰 Cost Optimization

This serverless architecture is cost-effective:

- **Lambda**: Pay per request and execution time
- **API Gateway**: Pay per API call
- **CloudWatch**: Pay for log storage and retention

Typical costs for low-traffic APIs: $1-5/month

## 🚀 CI/CD Pipeline

Consider adding automated deployment:

```yaml
# .github/workflows/deploy.yml
name: Deploy API
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Terraform
        uses: hashicorp/setup-terraform@v1
      - name: Terraform Apply
        run: |
          terraform init
          terraform apply -auto-approve
```

## 🧹 Cleanup

To destroy all resources:

```bash
terraform destroy
```

## 📚 Additional Resources

- [AWS Lambda Developer Guide](https://docs.aws.amazon.com/lambda/latest/dg/)
- [API Gateway Documentation](https://docs.aws.amazon.com/apigateway/)
- [Terraform AWS Provider](https://registry.terraform.io/providers/hashicorp/aws/latest/docs)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test the deployment
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

**Need help?** Check the [Terraform outputs](#terraform-outputs) section or review the AWS CloudWatch logs for debugging information.
