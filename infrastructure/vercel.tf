
resource "vercel_project" "novotherm" {
  name                       = "novotherm"
  framework                  = "nextjs"
  serverless_function_region = "fra1"
  git_repository = {
    type              = "github"
    repo              = data.github_repository.novotherm.full_name
    production_branch = "prod"

  }
  vercel_authentication = {
    deployment_type = "none"
  }
}

resource "vercel_project_domain" "prod" {
  project_id = vercel_project.novotherm.id
  domain     = "novotherm-koeln.de"
}


locals {
  env_variables_all = {

    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY = var.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    RESEND_API_KEY                  = var.RESEND_API_KEY
    RESEND_FROM_EMAIL               = var.RESEND_FROM_EMAIL
  }
  env_variables_nonprod = {
    RESEND_TO_EMAIL_NONPROD = var.RESEND_TO_EMAIL_NONPROD
    URL_NONPROD             = var.URL_NONPROD
  }
  env_variables_prod = {
    RESEND_TO_EMAIL_PROD = var.RESEND_TO_EMAIL_PROD
    URL_PROD             = var.URL_PROD
  }
}

resource "vercel_project_environment_variable" "novotherm_all" {
  count      = length(local.env_variables_all)
  project_id = vercel_project.novotherm.id
  key        = keys(local.env_variables_all)[count.index]
  value      = values(local.env_variables_all)[count.index]
  target = [
    "production",
    "preview",
  "development", ]
}
resource "vercel_project_environment_variable" "novotherm_nonprod" {
  count      = length(local.env_variables_nonprod)
  project_id = vercel_project.novotherm.id
  key        = keys(local.env_variables_nonprod)[count.index]
  value      = values(local.env_variables_nonprod)[count.index]
  target     = ["preview", "development"]
}
resource "vercel_project_environment_variable" "novotherm_prod" {
  count      = length(local.env_variables_prod)
  project_id = vercel_project.novotherm.id
  key        = keys(local.env_variables_prod)[count.index]
  value      = values(local.env_variables_prod)[count.index]
  target     = ["production"]
}
