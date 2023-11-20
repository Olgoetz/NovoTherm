
resource "vercel_project" "novotherm" {
  name                       = "novotherm"
  framework                  = "nextjs"
  serverless_function_region = "fra1"
  git_repository = {
    type = "github"
    repo = data.github_repository.novotherm.full_name
  }
}
