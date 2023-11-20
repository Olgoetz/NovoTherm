
# Configure the GitHub Provider
provider "github" {}

data "github_repository" "novotherm" {
  name = "NovoTherm"
}
