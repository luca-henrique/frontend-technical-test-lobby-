import { Button, ButtonProps } from '@mui/material';


interface CustomButtonProps extends ButtonProps {
  children: React.ReactNode
}

export const CustomButton = ({ children, disableElevation = true, ...props }: CustomButtonProps) => {
  return (
    <Button sx={{ textTransform: "capitalize" }} variant="contained" disableElevation={disableElevation} {...props}>
      {children}
    </Button>
  );
}