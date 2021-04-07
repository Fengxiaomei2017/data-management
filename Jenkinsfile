node("docker")
{
    stage '签出代码'
        checkout scm
    stage '构建镜像'
        sh "docker build -t basic-data-frontend -f Deploy.dockerfile ."
    stage '部署项目'
        sh 'docker-compose -f docker-compose.Deploy.yaml up -d'
    stage '清理无用镜像'
        sh 'docker container prune -f && docker image prune -f'
}