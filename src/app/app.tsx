import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import MultipleSelectChip from '../components/atoms/select-group/select-group';
import FormattedInputs from '../components/atoms/mask-input/mask-input';
import DateValidationDisableFuture from '../components/atoms/input-date/input-date';
import SelectVariants from '../components/atoms/select/select';
import Input from '../components/atoms/input/input';
import { Home } from '../pages/home';



export default function App() {
  return (
    <Home />
  );
}


function App2() {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Input />
        <MultipleSelectChip />
        <FormattedInputs />
        <DateValidationDisableFuture />
        <SelectVariants />
      </Box>
    </Container>
  );
}
