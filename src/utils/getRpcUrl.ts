import sample from 'lodash/sample'

// Array of available nodes to connect to
export const nodes = [process.env.REACT_APP_NETWORK_URL]

const getNodeUrl = () => {
  return sample(nodes)
}

export default getNodeUrl
