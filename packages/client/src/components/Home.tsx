import { Center, Input, Button, Text } from "@mantine/core";
import { IconAt, IconPassword } from "@tabler/icons-react";

export function Home() {
  return (
    <Center style={{ width: "100vw", height: "100vh" }}>
      <div>
        <Text size={"xl"} fw={"bold"}>
          Welcome, joel@email.com
        </Text>
        <Button>Logout</Button>
      </div>
    </Center>
  );
}
