## Installation Guide for My Web Class Simulation project

This guide provides step-by-step instructions for installing Project X on your local computer. Please make sure that you have the following prerequisites installed before proceeding:

- Git should be installed on your system. You can download it from [here](https://git-scm.com/downloads).
- Docker should be installed on your system. You can download it from [here](https://www.docker.com/products/docker-desktop).
- Node.js should be installed on your system. You can download it from [here](https://nodejs.org/en/download/).
- PyCharm should be installed on your system. You can download it from [here](https://www.jetbrains.com/pycharm/download/).

### Step 1: Clone the Github repository

1. Open the terminal/command prompt.
2. Navigate to the directory where you want to clone the repository.
3. Run the command `git clone https://github.com/yourusername/your-repo.git`.
4. Enter your Github credentials if prompted.
5. Wait for the repository to be cloned.

### Step 2: Set up the environment

1. Open PyCharm.
2. Go to `File > Open` and navigate to the cloned repository.
3. Open the project in PyCharm.
4. Open the terminal in PyCharm.
5. Run the command `npm install` to install the required node modules.
6. Run the command `docker-compose up` to start the Docker containers.

### Step 3: Run the project

1. Open a web browser.
2. Navigate to `http://localhost:3000` to access the project.
