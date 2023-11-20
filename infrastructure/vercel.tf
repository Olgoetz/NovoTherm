
resource "vercel_project" "novotherm" {
  name      = "novotherm"
  framework = "nextjs"

  git_repository = {
    type = "github"
    repo = data.github_repository.novotherm.full_name
  }
}
