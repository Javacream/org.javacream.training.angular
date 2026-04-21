# Create Workspace

* npx create-nx-workspace@latest people-workspace --preset=angular-monorepo

# Create Layout Libraries

* nx g @nx/angular:library libs/shared/ui/content --tags=ui
* nx g @nx/angular:library libs/shared/ui/footer --tags=ui
* nx g @nx/angular:library libs/shared/ui/header --tags=ui