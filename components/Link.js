import NextLink from 'next/link'
import config from 'next/config'


const {publicRuntimeConfig} = config()
const prefix = publicRuntimeConfig.prefix

console.log(prefix)

const Link = ( {href, children} )=>(
    <NextLink href={href} as={`${prefix}${href}`}>{children}</NextLink>
)

export default Link


