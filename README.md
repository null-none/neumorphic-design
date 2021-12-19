### Neumorphic Design System

```bash
yarn add neumorphic-design 
# or
npm install neumorphic-design 
```


```javascript
import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "neumorphic-design/utils/theme";

import { Layout } from "neumorphic-design/components/Layout";
import { Button } from "neumorphic-design/components/Button";
import { Input } from "neumorphic-design/components/Input";
import {
  H1,
  H2,
  H3,
  P,
} from "neumorphic-design/components/Typography";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <H1 mb={2}>
          Hello World
        </H1>
        <H2 mb={2}>
          Lorem Ipsum
        </H2>
        <H3 mb={2}>
          Lorem Ipsum
        </H3>
        <P mb={2} fontSize="small" fontWeight={500} lineHeight="140%">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy
        </P>
        <div>
          <Button variant="primary" mt={2} mr={3}>
            Button
          </Button>
          <Button variant="secondary" mt={2} mr={3}>
            Button
          </Button>
          <Button mt={2} mr={3}>
            Button
          </Button>
        </div>
        <div>
          <Input mt={3} placeholder="Placeholder" width="300px" />
        </div>
      </Layout>
    </ThemeProvider>
  );
}

export default App;

```