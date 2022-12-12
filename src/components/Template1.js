import styled from "@emotion/styled";
import { Box, Button, Collapse, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, TextField, Typography } from "@mui/material";
import { useMemo, useState } from "react";
import image1 from '../images/1.webp'
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import AddIcon from '@mui/icons-material/Add';
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Document, Font, Image, Page, PDFViewer, Text, View } from "@react-pdf/renderer";
import Ubuntuold from '../fonts/Ubuntu-Bold.ttf' 
import UbuntuMedium from '../fonts/Ubuntu-Medium.ttf'
import UbuntuLight from '../fonts/Ubuntu-Light.ttf'
import { Link } from "react-router-dom";

Font.register({
    family: 'Ubuntu',
    fonts:[
      {
        fontWeight:'bold',
        src: Ubuntuold
      },
      {
        fontWeight:'medium',
        src: UbuntuMedium
      },
      {
        fontWeight:'light',
        src: UbuntuLight
      },
    ],
  });



export default function Tempate1() {
  const [inputs, setInputs] = useState({
    phone: '',
    address: '',
    email: '',
    img: '',
    name: '',
    lastName: '',
    profession: '',
    expertiseArray: [],
    referencePosition: '',
    description: '',
    languageArray: [],
    language: '',
    education: {
      duration: '',
      university: '',
      degree: '',
    },
    educations: [],
    job: {
      description: '',
      position: '',
      duration: '',
      companyName: '',
    },
    jobs: [],
    expertise: '',
  });
  const [anchorEl, setAnchorEl] = useState(null);
  const [pdfDoc, setPdfDoc] = useState({
    name: '',
    lastName: '',
    referencePosition: '',
    profession: '',
    description: '',
    img: '',
    expertiseArray: [],
    languageArray: [],
    language: '',
    education: {
      duration: '',
      university: '',
      degree: '',
    },
    educations: [],
    job: {
      description: '',
      position: '',
      duration: '',
      companyName: '',
    },
    jobs: [],
    expertise: '',
  });
  const [anchorElLanguage, setAnchorElLanguage] = useState(null);
  const [anchorElEducation, setAnchorElEducation] = useState(null);
  const open = Boolean(anchorEl);
  const openEducation = Boolean(anchorElEducation);
  const openLanguage = Boolean(anchorElLanguage);
  const [openAddExperience, setOpenAddExperience] = useState(false);

  const handleClickList = () => {
    setOpenAddExperience(!openAddExperience);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickLanguage = (event) => {
    setAnchorElLanguage(event.currentTarget);
  };
  const handleClickEducation = (event) => {
    setAnchorElEducation(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseLanguage = () => {
    setAnchorElLanguage(null);
  };
  const handleCloseEducation = () => {
    setAnchorElEducation(null);
  };
  const Input = styled('input')({
    display: 'none',
  });
  const handleChangeInputs = () => {};
  // console.log(inputs)
  function PdfPreview({
    name,
    lastName,
    image,
    phone,
    email,
    address,
    educations,
    expertiseArray,
    languageArray,
    profession,
    description,
    jobs,
    referenceName,
    referenceCompanyName,
    referencePosition,
    referencePhone,
    referenceEmail,
  }) {
    return (
      <Document>
        <Page size="A4">
          <View style={{ display: 'flex', flexWrap: 'nowrap', flexDirection: 'row', height: '100%' }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#37474f',
                width: '30%',
                overflow: 'hidden',
              }}
            >
              <View style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
                <View
                  style={{
                    height: '110px',
                    width: '110px',
                    borderRadius: '50%',
                    backgroundColor: 'white',
                    marginTop: '25px',
                    overflow: 'hidden',
                  }}
                >
                  {image && (
                    <Image src={URL.createObjectURL(image)} style={{ width: '100%', height: 'auto' }} />
                  )}
                </View>
              </View>
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  paddingLeft: '30px',
                }}
              >
                <Text
                  style={{
                    fontSize: '20px',
                    color: 'white',
                    paddingTop: '25px',
                    fontFamily: 'Ubuntu',
                    fontWeight: 'medium',
                    borderBottom: 1,
                    borderColor: 'white',
                    paddingBottom: '5px',
                  }}
                >
                  Contact
                </Text>
                <Text
                  style={{
                    fontSize: '12px',
                    color: 'white',
                    paddingTop: '15px',
                    fontFamily: 'Ubuntu',
                    fontWeight: 'medium',
                  }}
                >
                  Phone
                </Text>
                <Text
                  style={{
                    fontSize: '8px',
                    color: 'white',
                    paddingTop: '3px',
                    fontFamily: 'Ubuntu',
                    fontWeight: 'light',
                  }}
                >
                  {phone}
                </Text>
                <Text
                  style={{
                    fontSize: '12px',
                    color: 'white',
                    paddingTop: '15px',
                    fontFamily: 'Ubuntu',
                    fontWeight: 'medium',
                  }}
                >
                  Email
                </Text>
                <Text
                  style={{
                    fontSize: '8px',
                    color: 'white',
                    paddingTop: '3px',
                    fontFamily: 'Ubuntu',
                    fontWeight: 'light',
                  }}
                >
                  {email}
                </Text>
                <Text
                  style={{
                    fontSize: '12px',
                    color: 'white',
                    paddingTop: '15px',
                    fontFamily: 'Ubuntu',
                    fontWeight: 'medium',
                  }}
                >
                  Address
                </Text>
                <Text
                  style={{
                    fontSize: '8px',
                    color: 'white',
                    paddingTop: '3px',
                    fontFamily: 'Ubuntu',
                    fontWeight: 'light',
                  }}
                >
                  {address}
                </Text>
                <Text
                  style={{
                    fontSize: '20px',
                    color: 'white',
                    paddingTop: '15px',
                    fontFamily: 'Ubuntu',
                    fontWeight: 'medium',
                    borderBottom: 1,
                    borderColor: 'white',
                    paddingBottom: '5px',
                  }}
                >
                  Education
                </Text>
                {educations.map((item, index) => {
                  return (
                    <View style={{ paddingTop: '15px' }} key={index}>
                      <Text style={{ fontSize: '9px', fontFamily: 'Ubuntu', color: 'white' }}>
                        {item.duration}
                      </Text>
                      <Text
                        style={{ fontSize: '10px', fontFamily: 'Ubuntu', color: 'white', fontWeight: 'bold' }}
                      >
                        {item.degree}
                      </Text>
                      <Text
                        style={{
                          fontSize: '10px',
                          fontFamily: 'Ubuntu',
                          color: 'white',
                          fontWeight: 'medium',
                        }}
                      >
                        {item.university}
                      </Text>
                    </View>
                  );
                })}
                <Text
                  style={{
                    fontSize: '20px',
                    color: 'white',
                    paddingTop: '15px',
                    fontFamily: 'Ubuntu',
                    fontWeight: 'medium',
                    borderBottom: 1,
                    borderColor: 'white',
                    paddingBottom: '5px',
                  }}
                >
                  Expertise
                </Text>
                {expertiseArray.map((item, index) => {
                  return (
                    <View
                      key={index}
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'nowrap',
                        alignItems: 'flex-end',
                      }}
                    >
                      <Text
                        style={{
                          fontSize: '20px',
                          fontFamily: 'Ubuntu',
                          color: 'white',
                          paddingRight: '5px',
                        }}
                      >
                        .
                      </Text>
                      <Text style={{ fontSize: '9px', fontFamily: 'Ubuntu', color: 'white' }}>{item}</Text>
                    </View>
                  );
                })}
                <Text
                  style={{
                    fontSize: '20px',
                    color: 'white',
                    paddingTop: '15px',
                    fontFamily: 'Ubuntu',
                    fontWeight: 'medium',
                    borderBottom: 1,
                    borderColor: 'white',
                    paddingBottom: '5px',
                    marginBottom: '10px',
                  }}
                >
                  Language
                </Text>
                {languageArray.map((item, index) => {
                  return (
                    <Text
                      key={index}
                      style={{
                        fontSize: '10px',
                        fontFamily: 'Ubuntu',
                        color: 'white',
                        paddingBottom: '5px',
                        fontWeight: 'medium',
                      }}
                    >
                      {item}
                    </Text>
                  );
                })}
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '70%',
                height: '100%',
                overflow: 'hidden',
                paddingLeft: '15px',
                paddingRight: '5px',
              }}
            >
              <View style={{ display: 'flex', flexDirection: 'row', overflow: 'hidden' }}>
                <Text
                  style={{
                    fontSize: '20px',
                    padding: '30px 5px 0 0',
                    fontFamily: 'Ubuntu',
                    fontWeight: 'medium',
                  }}
                >
                  {name}
                </Text>
                <Text
                  style={{
                    fontSize: '20px',
                    padding: '30px 5px 0 0',
                    fontFamily: 'Ubuntu',
                    fontWeight: 'light',
                  }}
                >
                  {lastName}
                </Text>
              </View>
              <Text style={{ fontSize: '16px', paddingTop: '2px', fontFamily: 'Ubuntu' }}>{profession}</Text>
              <Text
                style={{
                  fontSize: '9px',
                  fontFamily: 'Ubuntu',
                  height: '82px',
                  overflow: 'hidden',
                  paddingTop: '7px',
                }}
              >
                {description}
              </Text>
              <Text
                style={{
                  fontSize: '20px',
                  paddingTop: '10px',
                  fontFamily: 'Ubuntu',
                  fontWeight: 'medium',
                  borderBottom: 1,
                  marginBottom: '15px',
                }}
              >
                Experience
              </Text>
              {jobs.map((item, index) => {
                return (
                  <View
                    style={{ display: 'flex', flexDirection: 'row', height: '130px', overflow: 'hidden' }}
                    key={index}
                  >
                    <View style={{ display: 'flex', flexDirection: 'column', flexWrap: 'nowrap' }}>
                      <View style={{ height: '7px', width: '7px', borderRadius: '50%', border: '1.3px' }} />
                      <View style={{ borderLeft: '1.3px', height: '130px', marginLeft: '3px' }} />
                      {index === jobs.length - 1 ? (
                        <View style={{ height: '7px', width: '7px', borderRadius: '50%', border: '1.3px' }} />
                      ) : null}
                    </View>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        paddingLeft: '10px',
                        overflow: 'hidden',
                        paddingRight: '10px',
                        alignContent: 'flex-start',
                      }}
                    >
                      <Text style={{ fontSize: '11px', fontFamily: 'Ubuntu', fontWeight: 'medium' }}>
                        {item.duration}
                      </Text>
                      <Text
                        style={{
                          fontSize: '11px',
                          fontFamily: 'Ubuntu',
                          fontWeight: 'light',
                          paddingTop: '2px',
                        }}
                      >
                        {item.companyName}
                      </Text>
                      <Text
                        style={{
                          fontSize: '13px',
                          fontFamily: 'Ubuntu',
                          fontWeight: 'medium',
                          paddingTop: '5px',
                        }}
                      >
                        {item.position}
                      </Text>
                      <Text
                        style={{
                          fontSize: '9px',
                          fontFamily: 'Ubuntu',
                          fontWeight: 'light',
                          paddingTop: '2px',
                        }}
                      >
                        {item.description}
                      </Text>
                    </View>
                  </View>
                );
              })}
              <Text
                style={{
                  fontSize: '20px',
                  paddingTop: '15px',
                  fontFamily: 'Ubuntu',
                  fontWeight: 'medium',
                  borderBottom: 1,
                  marginBottom: '15px',
                }}
              >
                Reference
              </Text>
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  flexDirection: 'row',
                  paddingRight: '15px',
                }}
              >
                <View style={{ display: 'flex', flexdirection: 'column' }}>
                  <Text
                    style={{
                      fontSize: '15px',
                      fontFamily: 'Ubuntu',
                      fontWeight: 'medium',
                      paddingTop: '2px',
                    }}
                  >
                    {referenceName}
                  </Text>
                  <Text
                    style={{ fontSize: '10px', fontFamily: 'Ubuntu', fontWeight: 'light', paddingTop: '2px' }}
                  >
                    {referencePosition}, {referenceCompanyName}
                  </Text>
                  <View style={{ display: 'flex', flexDirection: 'row', paddingTop: '10px' }}>
                    <Text
                      style={{
                        fontSize: '10px',
                        fontFamily: 'Ubuntu',
                        fontWeight: 'medium',
                        paddingRight: '12px',
                      }}
                    >
                      Phone:
                    </Text>
                    <Text style={{ fontSize: '10px', fontFamily: 'Ubuntu', fontWeight: 'light' }}>
                      {referencePhone}
                    </Text>
                  </View>
                  <View style={{ display: 'flex', flexDirection: 'row', paddingTop: '5px' }}>
                    <Text
                      style={{
                        fontSize: '10px',
                        fontFamily: 'Ubuntu',
                        fontWeight: 'medium',
                        paddingRight: '16px',
                      }}
                    >
                      Email:
                    </Text>
                    <Text style={{ fontSize: '10px', fontFamily: 'Ubuntu', fontWeight: 'light' }}>
                      {referenceEmail}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    );
  }
  const doc = useMemo(
    () => (
      <PdfPreview
        name={pdfDoc.name}
        lastName={pdfDoc.lastName}
        image={pdfDoc.img}
        phone={pdfDoc.phone}
        email={pdfDoc.email}
        address={pdfDoc.address}
        educations={pdfDoc.educations}
        expertiseArray={pdfDoc.expertiseArray}
        languageArray={pdfDoc.languageArray}
        profession={pdfDoc.profession}
        description={pdfDoc.description}
        jobs={pdfDoc.jobs}
        referenceName={pdfDoc.referenceName}
        referenceCompanyName={pdfDoc.referenceCompanyName}
        referencePhone={pdfDoc.referencePhone}
        referenceEmail={pdfDoc.referenceEmail}
        referencePosition={pdfDoc.referencePosition}
      />
    ),
    [pdfDoc]
  );
  return (
    <Grid item container xs={12} spacing={2} padding={3} paddingBottom={20}>
      <Grid item container sm={12} md={6} alignItems="flex-start">
        <Grid
          item
          container
          direction="column"
          xs={3}
          sx={{ bgcolor: '#37474f', overflow: 'hidden' }}
          alignItems="cneter"
        >
          <label
            htmlFor="contained-button-file"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <Input
              accept="image/*"
              id="contained-button-file"
              type="file"
              onChange={(e) => setInputs({ ...inputs, img: e.target.files[0] })}
            />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '8vw',
                height: '8vw',
                backgroundColor: 'white',
                borderRadius: '50%',
                overflow: 'hidden',
                cursor: 'pointer',
                marginTop: '1.5vw',
              }}
              component="span"
            >
              {!inputs.img && <AddAPhotoOutlinedIcon />}
              {inputs.img && (
                <img src={URL.createObjectURL(inputs.img)} style={{ width: '100%', height: 'auto' }} />
              )}
            </Box>
          </label>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              paddingLeft: '1vw',
              marginTop: '1.5vw',
              bgcolor: 'white',
            }}
          >
            <Typography
              sx={{ fontSize: '1.2vw', fontWeight: 'medium', borderBottom: 0.1, paddingTop: '2vw' }}
            >
              Contacts
            </Typography>

            <TextField
              onKeyDown={(e) => {
                e.stopPropagation();
              }}
              sx={{ '& .MuiFormLabel-root': { fontSize: '1vw' }, marginTop: '1vw' }}
              variant="standard"
              value={inputs.phone}
              label="Phone"
              type="number"
              onChange={(e) => setInputs({ ...inputs, phone: e.target.value })}
            />
            <TextField
              onKeyDown={(e) => {
                e.stopPropagation();
              }}
              sx={{ '& .MuiFormLabel-root': { fontSize: '1vw' } }}
              variant="standard"
              value={inputs.email}
              label="Email"
              //    type='number'
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            />
            <TextField
              onKeyDown={(e) => {
                e.stopPropagation();
              }}
              sx={{ '& .MuiFormLabel-root': { fontSize: '1vw' } }}
              variant="standard"
              value={inputs.address}
              label="Address"
              //    type='number'
              onChange={(e) => setInputs({ ...inputs, address: e.target.value })}
            />
            <Typography sx={{ fontSize: '1.2vw', fontWeight: 'medium', borderBottom: 0.1, marginTop: '1vw' }}>
              Education
            </Typography>
            <Button
              id="basic-button"
              aria-controls={openEducation ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={openEducation ? 'true' : undefined}
              onClick={handleClickEducation}
            >
              Add+
            </Button>
            <Menu
              //    id="basic-menu"
              anchorEl={anchorElEducation}
              open={openEducation}
              onClose={handleCloseEducation}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem sx={{ display: 'flex', flexDirection: 'column' }}>
                <TextField
                  onKeyDown={(e) => {
                    e.stopPropagation();
                  }}
                  sx={{ '& .MuiFormLabel-root': { fontSize: '1vw' }, marginTop: '1vw' }}
                  variant="standard"
                  label="Duration"
                  value={inputs.education.duration}
                  onChange={(e) =>
                    setInputs({ ...inputs, education: { ...inputs.education, duration: e.target.value } })
                  }
                />
                <TextField
                  onKeyDown={(e) => {
                    e.stopPropagation();
                  }}
                  sx={{ '& .MuiFormLabel-root': { fontSize: '1vw' } }}
                  variant="standard"
                  label="Degree"
                  value={inputs.education.degree}
                  onChange={(e) =>
                    setInputs({ ...inputs, education: { ...inputs.education, degree: e.target.value } })
                  }
                />
                <TextField
                  onKeyDown={(e) => {
                    e.stopPropagation();
                  }}
                  sx={{ '& .MuiFormLabel-root': { fontSize: '1vw' } }}
                  variant="standard"
                  label="University/College"
                  value={inputs.education.university}
                  onChange={(e) =>
                    setInputs({ ...inputs, education: { ...inputs.education, university: e.target.value } })
                  }
                />
                <Button
                  onClick={() => {
                    setInputs({
                      ...inputs,
                      educations: [...inputs.educations, inputs.education],
                      education: {
                        duration: '',
                        university: '',
                        degree: '',
                      },
                    });
                    handleCloseEducation();
                  }}
                >
                  Add
                </Button>
              </MenuItem>
            </Menu>
            {inputs.educations.map((item, index) => {
              return (
                <div key={index} style={{ paddingTop: '1vw' }}>
                  <Typography sx={{ fontSize: '1vw' }}>{item.duration}</Typography>
                  <Typography sx={{ fontSize: '1vw' }}>{item.degree}</Typography>
                  <Typography sx={{ fontSize: '1vw' }}>{item.university}</Typography>
                  <Button
                    size="small"
                    sx={{ fontSize: '1vw' }}
                    onClick={() =>
                      setInputs({
                        ...inputs,
                        educations: [...inputs.educations.filter((item1, index1) => index1 !== index)],
                      })
                    }
                  >
                    delete
                  </Button>
                </div>
              );
            })}

            <Typography sx={{ fontSize: '1.2vw', fontWeight: 'medium', borderBottom: 0.1, marginTop: '1vw' }}>
              Expertise
            </Typography>
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              Add+
            </Button>
            <Menu
              //    id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem sx={{ display: 'flex', flexDirection: 'column' }}>
                <TextField
                  onKeyDown={(e) => {
                    e.stopPropagation();
                  }}
                  sx={{ '& .MuiFormLabel-root': { fontSize: '1vw' } }}
                  variant="standard"
                  value={inputs.expertise}
                  label="expertise"
                  onChange={(e) => setInputs({ ...inputs, expertise: e.target.value })}
                />
                <Button
                  onClick={() => {
                    setInputs({ ...inputs, expertiseArray: [...inputs.expertiseArray, inputs.expertise] });
                    handleClose();
                  }}
                >
                  Add
                </Button>
              </MenuItem>
            </Menu>
            {inputs.expertiseArray.map((item, index) => {
              return (
                <div key={index}>
                  <Typography sx={{ fontSize: '1vw' }} key={index}>
                    . {item}
                  </Typography>
                  <Button
                    size="small"
                    sx={{ fontSize: '1vw' }}
                    onClick={() =>
                      setInputs({
                        ...inputs,
                        expertiseArray: [
                          ...inputs.expertiseArray.filter((item1, index1) => index1 !== index),
                        ],
                      })
                    }
                  >
                    delete
                  </Button>
                </div>
              );
            })}
            <Typography sx={{ fontSize: '1.2vw', fontWeight: 'medium', borderBottom: 0.1, marginTop: '1vw' }}>
              Language
            </Typography>
            <Button
              id="basic-button"
              aria-controls={openLanguage ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={openLanguage ? 'true' : undefined}
              onClick={handleClickLanguage}
            >
              Add+
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorElLanguage}
              open={openLanguage}
              onClose={handleCloseLanguage}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem sx={{ display: 'flex', flexDirection: 'column' }}>
                <TextField
                  onKeyDown={(e) => {
                    e.stopPropagation();
                  }}
                  sx={{ '& .MuiFormLabel-root': { fontSize: '1vw' } }}
                  variant="standard"
                  value={inputs.language}
                  label="Langauge"
                  onChange={(e) => setInputs({ ...inputs, language: e.target.value })}
                />
                <Button
                  onClick={() => {
                    setInputs({ ...inputs, languageArray: [...inputs.languageArray, inputs.language] });
                    handleCloseLanguage();
                  }}
                >
                  Add
                </Button>
              </MenuItem>
            </Menu>
            {inputs.languageArray.map((item, index) => {
              return (
                <div key={index}>
                  <Typography sx={{ fontSize: '1vw' }}>. {item}</Typography>
                  <Button
                    size="small"
                    sx={{ fontSize: '1vw' }}
                    onClick={() =>
                      setInputs({
                        ...inputs,
                        languageArray: [...inputs.languageArray.filter((item1, index1) => index1 !== index)],
                      })
                    }
                  >
                    delete
                  </Button>
                </div>
              );
            })}
          </Box>
        </Grid>
        <Grid item container xs={9} alignItems="flex-start" sx={{ paddingLeft: '1vw', overflow: 'hidden' }}>
          <Button onClick={() => setPdfDoc(inputs)}>preview</Button>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button>Home</Button>
          </Link>
          <Grid item container xs={12} wrap="nowrap" alignItems="flex-start">
            <TextField
              onKeyDown={(e) => {
                e.stopPropagation();
              }}
              sx={{ '& .MuiFormLabel-root': { fontSize: '1vw' }, margin: '1vw 1vw 0 0' }}
              variant="standard"
              label="First name"
              onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
            />
            <TextField
              onKeyDown={(e) => {
                e.stopPropagation();
              }}
              sx={{ '& .MuiFormLabel-root': { fontSize: '1vw' }, marginTop: '1vw' }}
              variant="standard"
              label="Last name"
              onChange={(e) => setInputs({ ...inputs, lastName: e.target.value })}
            />
          </Grid>
          <Grid item container xs={12} justifyContent="flex-start" direction="column">
            <TextField
              onKeyDown={(e) => {
                e.stopPropagation();
              }}
              sx={{ '& .MuiFormLabel-root': { fontSize: '1vw' }, marginTop: '1vw' }}
              variant="standard"
              label="Profession"
              onChange={(e) => setInputs({ ...inputs, profession: e.target.value })}
            />
            <TextField
              onKeyDown={(e) => {
                e.stopPropagation();
              }}
              sx={{ '& .MuiFormLabel-root': { fontSize: '1vw' }, marginTop: '1vw' }}
              variant="standard"
              multiline
              InputProps={{ sx: { height: 80, width: '100%', fontSize: '1vw', overflow: 'scroll' } }}
              label="Description"
              onChange={(e) => setInputs({ ...inputs, description: e.target.value })}
            />
            <Typography
              sx={{ fontSize: '1.2vw', fontWeight: 'medium', borderBottom: 0.1, paddingTop: '2vw' }}
            >
              Experience
            </Typography>
            <ListItemButton onClick={handleClickList}>
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <ListItemText primary="Add" />
              {openAddExperience ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openAddExperience} timeout="auto" unmountOnExit>
              <List component="div" disablePadding sx={{ pl: 4 }}>
                <ListItem>
                  <TextField
                    onKeyDown={(e) => {
                      e.stopPropagation();
                    }}
                    sx={{ '& .MuiFormLabel-root': { fontSize: '1vw' } }}
                    variant="standard"
                    label="Duration"
                    value={inputs.job.duration}
                    onChange={(e) =>
                      setInputs({ ...inputs, job: { ...inputs.job, duration: e.target.value } })
                    }
                  />
                </ListItem>
                <ListItem>
                  <TextField
                    onKeyDown={(e) => {
                      e.stopPropagation();
                    }}
                    sx={{ '& .MuiFormLabel-root': { fontSize: '1vw' } }}
                    variant="standard"
                    label="Company name"
                    value={inputs.job.companyName}
                    onChange={(e) =>
                      setInputs({ ...inputs, job: { ...inputs.job, companyName: e.target.value } })
                    }
                  />
                </ListItem>
                <ListItem>
                  <TextField
                    onKeyDown={(e) => {
                      e.stopPropagation();
                    }}
                    sx={{ '& .MuiFormLabel-root': { fontSize: '1vw' } }}
                    variant="standard"
                    label="Job position"
                    value={inputs.job.position}
                    onChange={(e) =>
                      setInputs({ ...inputs, job: { ...inputs.job, position: e.target.value } })
                    }
                  />
                </ListItem>
                <ListItem sx={{ width: '100%' }}>
                  <TextField
                    onKeyDown={(e) => {
                      e.stopPropagation();
                    }}
                    sx={{ '& .MuiFormLabel-root': { fontSize: '1vw' }, width: '100%', overflow: 'scroll' }}
                    variant="standard"
                    value={inputs.job.description}
                    multiline
                    InputProps={{ sx: { height: 80, width: '100%', fontSize: '1.2vw' } }}
                    label="Job description"
                    onChange={(e) =>
                      setInputs({ ...inputs, job: { ...inputs.job, description: e.target.value } })
                    }
                  />
                  <ListItemIcon
                    sx={{ cursor: 'pointer' }}
                    onClick={() => {
                      handleClickList();
                      setInputs({
                        ...inputs,
                        jobs: [...inputs.jobs, inputs.job],
                        job: { description: '', position: '', duration: '', companyName: '' },
                      });
                    }}
                  >
                    <AddIcon />
                  </ListItemIcon>
                </ListItem>
              </List>
            </Collapse>
            {inputs.jobs.map((item, index) => {
              return (
                <div key={index} style={{ padding: '0 0 3vw 3vw' }}>
                  <Typography sx={{ fontSize: '1.3vw', fontWeight: 'medium' }}>{item.duration}</Typography>
                  <Typography sx={{ fontSize: '1.3vw' }}>{item.companyName}</Typography>
                  <Typography sx={{ fontSize: '1.5vw', fontWeight: 'bold', py: '1vw' }}>
                    {item.position}
                  </Typography>
                  <Typography sx={{ fontSize: '1.1vw' }}>{item.description}</Typography>
                  <Button
                    onClick={() =>
                      setInputs({ ...inputs, jobs: inputs.jobs.filter((item1, index1) => index1 !== index) })
                    }
                  >
                    Delete
                  </Button>
                </div>
              );
            })}
            <Typography
              sx={{ fontSize: '1.2vw', fontWeight: 'medium', borderBottom: 0.1, paddingTop: '3vw' }}
            >
              Reference
            </Typography>
            <TextField
              onKeyDown={(e) => {
                e.stopPropagation();
              }}
              sx={{ '& .MuiFormLabel-root': { fontSize: '1vw' }, margin: '1.5vw 0 0 0' }}
              variant="standard"
              label="First/Last name"
              onChange={(e) => setInputs({ ...inputs, referenceName: e.target.value })}
            />
            <Grid item container xs={12} wrap="nowrap" alignItems="flex-start">
              <TextField
                onKeyDown={(e) => {
                  e.stopPropagation();
                }}
                sx={{ '& .MuiFormLabel-root': { fontSize: '1vw' }, paddingRight: '2vw' }}
                variant="standard"
                label="Job position"
                onChange={(e) => setInputs({ ...inputs, referencePosition: e.target.value })}
              />
              <TextField
                onKeyDown={(e) => {
                  e.stopPropagation();
                }}
                sx={{ '& .MuiFormLabel-root': { fontSize: '1vw' } }}
                variant="standard"
                label="Company name"
                onChange={(e) => setInputs({ ...inputs, referenceCompanyName: e.target.value })}
              />
            </Grid>
            <Grid item container xs={12} wrap="nowrap" alignItems="flex-start">
              <TextField
                onKeyDown={(e) => {
                  e.stopPropagation();
                }}
                sx={{ '& .MuiFormLabel-root': { fontSize: '1vw' }, paddingRight: '2vw' }}
                variant="standard"
                label="Phone"
                onChange={(e) => setInputs({ ...inputs, referencePhone: e.target.value })}
              />
              <TextField
                onKeyDown={(e) => {
                  e.stopPropagation();
                }}
                sx={{ '& .MuiFormLabel-root': { fontSize: '1vw' } }}
                variant="standard"
                label="Email"
                onChange={(e) => setInputs({ ...inputs, referenceEmail: e.target.value })}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item container sm={12} md={6}>
        <PDFViewer style={{ width: '100%', height: 800 }}>{doc}</PDFViewer>
      </Grid>
    </Grid>
  );
}