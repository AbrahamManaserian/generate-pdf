import { Grid } from '@mui/material';
import BarMenu from '../components/BarMenu';
import BodyImage from '../images Paul/boardroom-bright.jpeg';
import Footer from '../components/Footer';

export default function NewHomePage() {
  return (
    <div style={{ padding: 0, margin: 0 }}>
      <Grid
        sx={{
          //   backgroundImage:
          //     'url(' +
          //     'https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350' +
          //     ')',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',

          backgroundImage: `url(${BodyImage})`,
          height: 'calc(100vh - 125px)',
        }}
        item
        container
        xs={12}
      ></Grid>
      <Footer />
    </div>
  );
}
