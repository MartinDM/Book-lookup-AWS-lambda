output "api_endpoint" {
  description = "Invoke URL for the REST API"
  value       = aws_apigatewayv2_api.http_api.api_endpoint
}
