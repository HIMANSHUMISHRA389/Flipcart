import { AppBar, Box, Toolbar, Typography, styled } from "@mui/material";

//components
import Search from "./Search";
import CustomButtons from "./CustomButtons";

const StyledHeader = styled(AppBar)`
  height: 55px;
  background: #2874f0;
  padding-bottom:5px;
`;

const Component = styled(Box)`
  margin-left: 12%;
  line-height: 0;
`;

const SubHeading = styled(Typography)`
  font-style: italic;
  font-size: 10px;
`;

const PlusImage = styled("img")({
  width: 10,
  height: 10,
  marginTop: 4,
  marginLeft: 2,
});

const CustomButtonWrapper=styled(Box)`
margin:0 5% 0 auto;
`

const logoUrl =
  "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
const Header = () => {
  return (
    <StyledHeader>
      <Toolbar style={{ minheight: 55 }}>
        <Component>
          <img src={logoUrl} alt="logo" style={{ width: 75 }} />
          <Box style={{ display: "flex" }}>
            <SubHeading>
              Explore&nbsp;
              <Typography component="span">Plus</Typography>
            </SubHeading>
            <PlusImage
              src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
              alt="subLogo"
            />
          </Box>
        </Component>
        <Search />
        <CustomButtonWrapper>
          <CustomButtons />
        </CustomButtonWrapper>
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;
