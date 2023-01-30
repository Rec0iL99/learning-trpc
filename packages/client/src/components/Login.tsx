import { Button, Center, Input, Text } from "@mantine/core";
import { IconAt, IconPassword } from "@tabler/icons-react";

export function Login() {
  return (
    <Center style={{ width: "100vw", height: "100vh" }}>
      <div>
        <Text size={"xl"} fw={"bold"}>
          Login
        </Text>
        <Input icon={<IconAt />} placeholder="Your email" />
        <Input icon={<IconPassword />} placeholder="Your password" />
        <Button>Login</Button>
      </div>
    </Center>
  );
}
