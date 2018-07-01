import React from 'react';
import { shallow } from 'enzyme';
import PortfolioExampleModal from '../js/portfolio-example-modal';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const myExample = {
  'title': "AWS Serverless Architecture",
  'href': "https://aws.amazon.com/serverless/",
  'desc': "Serverless computing allows you to build and run applications and services without thinking about servers. Serverless applications don't require you to provision, scale, and manage any servers. You can build them for nearly any type of application or backend service, and everything required to run and scale your application with high availability is handled for you.",
  'image': {
    'desc': "Screenshot of example AWS Serverless Architecture",
    'src': "images/ServerlessArchitecture.jpg",
    'comment': "Test"
  }
};

describe("PortfolioExampleModal Component", () => {
  let component = shallow(<PortfolioExampleModal example={myExample}
    open={false}/>);
  let openComponent = shallow(<PortfolioExampleModal example={myExample}
    open={true}/>);

  let anchors = component.find("a");

  it("Test should contain a single Anchor Tag or 'a' element", () => {
    expect(anchors.length).toEqual(1);
  });

  it("Test should link to our project", () => {
    expect(anchors.prop('href')).toEqual(myExample.href);
  });

  it("Test should have the modal class set correctly", () => {
    expect(component.find(".oaws-white").hasClass("oaws-modal--closed")).toBe(true);
    expect(openComponent.find(".oaws-white").hasClass("oaws-modal--open")).toBe(true);
  });

});
