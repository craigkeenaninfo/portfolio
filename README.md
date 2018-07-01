# AWS Serverless Static Website Architecture #
AWS Serverless Static Website example to demo Cloud Portfolio


## Prerequisites ##

1. A personal computer, and Internet access
2. An email account 
3. An Amazon Web Services Account
4. A GitHub Account, and Repostory
5. Configure GitHub Access
    - Generate SSH Key and Add to SSH Agent (https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)
    - Create Personal Access Token for the CLI (https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/)
6. Download CloudFormation YML Template 'serverless-static-webite.yml' from this repository.

        git clone https://github.com/craigkeenaninfo/example.git

    Hint: If your unfamiliar with Git, see the 'Setup and Configure Developer's Desktop Environment' section below


# How to run AWS CloudFormation Infrastructure-as-Code(IAC) Template #
Before attempting these procedures, you must meet all the Prerequisites

1. Log in to the AWS Management Console and select CloudFormation in the Services menu.
2. Create a new stack by using one of the following options:
    - Click Create Stack. This is the only option if you have a currently running stack.
    - Click Create New Stack in the CloudFormation Stacks main window. This option is visible only if you have no running stacks.
3. On the Select Template page, choose a stack template by using the following options:
    - Upload a template to Amazon S3.

    Select an AWS CloudFormation template on your local computer. Choose Choose File to select the template file that you want to upload. 

4. To accept your settings, choose Next, and proceed with specifying the stack name and parameters.
5. On the Specify Details page, type a stack name in the Stack name box.

    In the Parameters section, specify parameters that are defined in the stack template.

    The following parameters are required:

    - Email Address (ex. example@gmail.com)
    - Domain Name (ex. example.com)
    - Website Name (ex. example.com)
    - GitHub Repository (ex. portfolio)
    - GitHub Repository Branch (ex. master)
    - GitHub Repository Location (ex. https://github.com/example/portfolio.git)
    - GitHub Owner (ex. example@gmail.com)
    - GitHub Personal Access Token / OAuthToken (Hint: completed during pre-requisites )
    - Application Id (Hint: Unique short name for website like 'web')

6. When you are satisfied with the parameter values, click Next to proceed with setting options for your stack.
7. On the Options screen of the Create Stack wizard, click Next Step to proceed with reviewing your stack.
8. On the Review page, review the proposed configuration.

    Select I acknowledge that this template may create IAM resources to acknowledge that AWS CloudFormation might create IAM resources.
9. When you finish, choose Create.

    Your stack appears in the list of AWS CloudFormation stacks, with a status of CREATE_IN_PROGRESS.

    While your stack is being created (or afterward), you can use the stack detail pane to view your stack's events, data, or resources. 

    After your stack has been successfully created, its status changes to CREATE_COMPLETE. You can then select it (if necessary) and click the Outputs tab to view your stack's outputs if you have defined any in the template.


# Setup and Configure Developer's Desktop Environment #
Please note it is beyond the scope of this procedure to teach how to develop applications. We can, however, identify the tools used for this example.

Please note that the commands shown are for linux/MacOS machines, but windows is supported. 
A developer running Windows will have to do independent research to identify Windows procedures and syntax

1. Launch a Terminal Window
2. Install Developer Software and Tools

    - Homebrew 

            /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

    - Git

            brew install git
    
    - AWS Command Line Interface (CLI)

            brew install awscli
	
        Edit .bash_profile
	
            PATH=$PATH:/usr/local/bin

    - Python

            brew install python

    - Boto3

            pip install boto3
    
    - iPython

            sudo -H pip install ipython

    - Atom

            brew cask install atom



3. Create a working directory (ex. /Users/example/projects/portfolio)

        mkdir projects/portfolio
        cd projects/portfolio
        
3. Install Library and Package Managemnt Software

    - npm

            npm init
    
        Provide the following:
    
            package name: (portfolio) 
            version: (1.0.0) 
            description: Cloud Portfolio
            entry point: (webpack.config.js) index.js
            test command: 
            git repository: (https://github.com/example/portfolio.git) 
            keywords: 
            author: example@gmail.com
            license: (ISC) 

    - local web server

            npm install -g local-web-server

    - React & ReactDOM

            npm install --save react react-dom

    - Webpack

            npm install --sav-dev webpack webpack-cli
    
    - 

4. Configure Git / Git Commands

    Change to working directory (ex. /Users/example/projects/portfolio))

        cd /Users/example/projects/portfolio
    
    Configure Global Settings

        git config --global user.name "First Lastname"
	    git config --global user.email example@gmail.com

    Clone Remote Repository to local copy on PC

        git clone https://github.com/craigkeenaninfo/example.git

    Edit / Update replacing example values with your application details

        atom <filename>
    
    Hint: replace <filename> with name of file you wish to edit

    Check Status
    
        git status

	Add / Stage updated File

        git <filename>

    Hint: replace <filename> with name of file you have edited

    Commit

	    git commit -m "First Commit"

    Push local copy to Remote repository 
	
        git push
	
    Note: If prompted, provide username/password


## Status ##
Initial Deploy