pipeline {
    agent any

    stages {
        stage('Checkout...') {
            steps {
                // Check out the latest code from the SCM (e.g., Git)
                git branch: 'main', url: 'https://github.com/shantanurawade/book-store-backend.git'
            }
        }

         stage('Deploy...') {
            steps {
                // SSH into the remote server, navigate to the project directory, and pull the latest code
                script {
                    sh '''
                    ssh ubuntu@13.203.78.22 "cd book-store-backend && git pull origin main"
                    '''
                }
            }
        }
        stage('Build...') {
            steps {
                // Build the application if necessary
                script {
                    sh 'ssh ubuntu@13.203.78.22 "cd book-store-backend && npm run dev"'
                }
            }
        }
  }
}
