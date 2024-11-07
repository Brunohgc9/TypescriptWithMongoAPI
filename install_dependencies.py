import subprocess

# Dependências e tipos que precisam ser instalados
dependencies = [
    "express",
    "http-errors",
    "mongodb",
    "cors"
]

# Dependências de desenvolvimento (tipos para TypeScript)
dev_dependencies = [
    "@types/express",
    "@types/http-errors",
    "@types/mongodb",
    "@types/cors",
    "@types/node"
]

def install_packages(packages, dev=False):
    for package in packages:
        try:
            # No Windows, use npm.cmd para garantir compatibilidade
            command = ["npm.cmd", "install", "--save-dev" if dev else "--save", package]
            subprocess.run(command, check=True)
            print(f"Successfully installed {package}")
        except subprocess.CalledProcessError as e:
            print(f"Error installing {package}: {e}")

# Instalar as dependências normais
install_packages(dependencies)

# Instalar as dependências de desenvolvimento (tipos)
install_packages(dev_dependencies, dev=True)

##para rodar use python install_dependencies.py
##para rodar o projeto user npx tsc 
##depois use ./dist/index.js