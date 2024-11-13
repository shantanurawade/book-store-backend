pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Check out the latest code from the SCM (e.g., Git)
                git branch: 'main', url: 'https://github.com/your-username/your-node-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install npm packages
                script {
                    if (fileExists('package.json')) {
                        sh 'npm install'
                    }
                }
            }
        }

        stage('Build') {
            steps {
                // Build the application if necessary
                script {
                    if (fileExists('package.json') ) {
                        sh 'npm run dev'
                    }
                }
            }
        }
  }
}
