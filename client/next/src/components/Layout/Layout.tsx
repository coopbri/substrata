import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Div100vh from "react-div-100vh";

import { Head } from "components";

interface Props {
  children?: ReactNode;
}

/**
 * Main layout.
 */
const Layout: React.FC = ({ children }: Props) => {
  // router
  const router = useRouter();

  // meta/SEO
  const [title, setTitle] = useState<string>("");
  useEffect(() => {
    const path = router.pathname.replace("/", "");
    const title = path.charAt(0).toUpperCase() + path.slice(1);

    // set page title
    setTitle(title);
  }, [router.pathname]);

  return (
    <>
      {/* SEO/meta */}
      <Head title={title} />
      <Div100vh>
        <Container>{children}</Container>
      </Div100vh>
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  height: 100%;
`;

export default Layout;
