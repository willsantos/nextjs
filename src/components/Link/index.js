import NextLink from "next/link";
import LinkStyled from "../LinkStyled";


export default function Link({ href, children, ...props }){
  return (
    <NextLink href={href} passHref>
      <LinkStyled {...props}>{children}</LinkStyled>
    </NextLink>
  );
}