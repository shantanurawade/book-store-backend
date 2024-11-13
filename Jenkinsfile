pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Check out the latest code from the SCM (e.g., Git)
                git branch: 'main', url: 'https://github.com/shantanurawade/book-store-backend.git'
            }
        }

        stage('Build') {
            steps {
                // Build the application if necessary
                script {
                    sh 'ssh ubuntu@13.203.78.22 npm run dev'
                }
            }
        }
  }
}
