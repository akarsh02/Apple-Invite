import { Stack, Link, Redirect } from 'expo-router';

import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  return <Redirect href='/welcome'/>
  // return (
  //   <>
  //     <Stack.Screen options={{ title: 'Home' }} />
  //     <Container>
  //       <Link href="/welcome">
  //         Welcome
  //       </Link>
  //     </Container>
  //   </>
  // );
}
