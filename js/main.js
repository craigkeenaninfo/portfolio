import React from 'react';
import ReactDOM from'react-dom';
import PortfolioExample from './portfolio-example';

const myWork = [
  {
    'title': "AWS Serverless Architecture",
    'href': "https://aws.amazon.com/serverless/",
    'desc': "Serverless computing allows you to build and run applications and services without thinking about servers. Serverless applications don't require you to provision, scale, and manage any servers. You can build them for nearly any type of application or backend service, and everything required to run and scale your application with high availability is handled for you.",
    'image': {
      'desc': "Screenshot of example AWS Serverless Architecture",
      'src': "images/ServerlessArchitecture.jpg",
      'comment': "Test"
    }
  },
  {
    'title': "AWS Infrastructure-as-Code",
    'href': "https://aws.amazon.com/cloudformation/",
    'desc': "AWS CloudFormation provides a common language for you to describe and provision all the infrastructure resources in your cloud environment. CloudFormation allows you to use a simple text file to model and provision, in an automated and secure manner, all the resources needed for your applications across all regions and accounts.",
    'image': {
      'desc': "Screenshot of example AWS CloudFormation Template",
      'src': "images/cfn-iac.jpg",
      'comment': ""
    }
  },
  {
    'title': "AWS DevOps",
    'href': "https://aws.amazon.com/devops/",
    'desc': `AWS provides a set of flexible services designed to enable companies to more rapidly and reliably build and deliver products using AWS and DevOps practices. These services simplify provisioning and managing infrastructure, deploying application code, automating software release processes, and monitoring your application and infrastructure performance.
             DevOps is the combination of cultural philosophies, practices, and tools that increases an organization’s ability to deliver applications and services at high velocity: evolving and improving products at a faster pace than organizations using traditional software development and infrastructure management processes. This speed enables organizations to better serve their customers and compete more effectively in the market.`,
    'image': {
      'desc': "Serverless Portfolio",
      'src': "images/DevOps.jpg",
      'comment': ""
    }
  },
  {
    'title': "HTML/CSS/Reactjs",
    'href': "https://reactjs.org",
    'desc': "A JavaScript library for building user interfaces",
    'image': {
      'desc': "Screenshot of a example Reactjs javascript code",
      'src': "images/reactjs.jpg",
      'comment': ""
    }
  }
]

ReactDOM.render(<PortfolioExample work={myWork}/>, document.getElementById('portfolio-example'));
