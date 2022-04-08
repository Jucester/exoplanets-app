import * as contentful from "contentful";
import { createClient as managementClient } from 'contentful-management';


export const contentfulConnect = async () => {
  const client = await contentful.createClient({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN,
  });

  return client;
}

export const contentfulManagement = async () => {
    let client = await managementClient({
        accessToken: process.env.REACT_APP_MANAGEMENT_TOKEN
    });

    let space = await client.getSpace(process.env.REACT_APP_SPACE_ID);
    let env = await space.getEnvironment('master');
    return env;
}