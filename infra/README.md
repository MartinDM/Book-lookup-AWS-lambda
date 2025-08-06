# Author Lookup Lambda Infra

This directory contains the Terraform configuration and deployment instructions for the lambda.

The backend is a Node.js AWS Lambda function that proxies requests to the Google Books API, deployed behind an API Gateway.

## 🏗️ Architecture

- **AWS Lambda (Node.js)** — Handles author/book search requests and proxies to Google Books API
- **API Gateway (HTTP API)** — Public endpoint for the Lambda
- **CloudWatch** — Logging and monitoring
- **Terraform** — Infrastructure as Code

## 📁 Project Structure

```
infra/
├── index.js         # Lambda function code (Node.js)
├── function.zip     # Zipped Lambda code (for upload)
├── main.tf          # Terraform infrastructure configuration
├── variables.tf     # Terraform input variables
├── outputs.tf       # Terraform output values
├── .env             # (Optional) Local environment variables for Lambda
└── README.md        # Project documentation
```

## 🚀 Quick Start

### Prerequisites

- [Terraform](https://www.terraform.io/downloads.html) >= 1.0
- [AWS CLI](https://aws.amazon.com/cli/) configured with appropriate credentials
- Node.js 18+ (for Lambda code development)

### Packaging and Uploading Lambda

1. Zip the Lambda code:
   ```sh
   cd infra
   zip function.zip index.js
   ```
2. Upload to S3 (replace bucket if needed):
   ```sh
   aws s3 cp function.zip s3://martindm-86/function.zip
   ```

### Deploying Infrastructure

1. Initialize Terraform:
   ```sh
   terraform init
   ```
2. Review the plan:
   ```sh
   terraform plan
   ```
3. Apply the deployment:
   ```sh
   terraform apply
   ```

## 🔧 Configuration

Edit variables in `variables.tf` or create a `terraform.tfvars` file to customise region, alerting, etc.

**Example:**

```hcl
aws_region = "eu-west-2"
```

## 📋 API Endpoint

The API Gateway exposes a single endpoint that proxies to the Lambda:

- **GET /** — Search for books by author (see main app for usage)

**Example request:**

```sh
curl "https://<api-id>.execute-api.<region>.amazonaws.com/?author=tolkien"
```

## 🛠️ Local Lambda Testing

You can test the Lambda handler locally with Node.js:

```sh
node index.js
# or use a test script if provided
```

## Security & Best Practices

- Lambda runs with minimal IAM permissions (see `main.tf`)
- API Gateway is public; consider adding auth for production
- Rate limiting and alerting are enabled by default
- Do not commit secrets (API keys) to git; use environment variables

## 🧹 Cleanup

To destroy all resources:

```sh
terraform destroy
```

## 📚 Resources

- [AWS Lambda (Node.js)](https://docs.aws.amazon.com/lambda/latest/dg/lambda-nodejs.html)
- [API Gateway HTTP API](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api.html)
- [Terraform AWS Provider](https://registry.terraform.io/providers/hashicorp/aws/latest/docs)

---

**Need help?** Check the Terraform outputs or AWS CloudWatch logs for debugging information.
