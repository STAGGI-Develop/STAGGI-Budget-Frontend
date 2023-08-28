import {
  Avatar,
  Button,
  ButtonGroup,
  Divider,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  Icon,
  IconButton,
  Input,
  Stack,
  Text,
  useEditableControls,
} from "@chakra-ui/react";
import { useState } from "react";
import edit from "../assets/icons/edit";

const Settings = () => {
  let profile = {
    FirstName: "Gastón",
    LastName: "Rios",
    Email: "gr@mail.com",
    Image: "https://avatars.githubusercontent.com/u/78388221",
  };

  const [FirstName, setFirstName] = useState(profile.FirstName);
  const [LastName, setLastName] = useState(profile.LastName);
  const [Email, setEmail] = useState(profile.Email);

  const [edit, setEdit] = useState(false);
  const [stateImage, setStateImage] = useState(profile.Image);
  const [file, setFile] = useState("");

  // if (data) {
  //   const remote = await axios.post("https://api.cloudinary.com/v1_1/dbi1xhzps/image/upload", data);
  //   image = remote.data?.secure_url
  // }
  const handleSubmitImage = () => {
    const data = new FormData();
    data.append("file", file[0]);
    data.append("upload_preset", "album_image");
    // changeAbout(stateImage, data);
    setEdit(false);
    setFile("");
    console.log(data);
  };

  const cancelImageEdit = () => {
    setEdit(false);
    setStateImage(profile.Image);
    setFile("");
  };

  const handleSubmit = (value, field) => {
    let data = {
      [field]: value,
    };
    console.log("form data: ", data);
    // addProductMutation.mutate({
    //   ...data,
    //   inStock: true,
    // });
  };

  return (
    <Stack // Content
      w="full"
      h="full"
      paddingX="30rem"
      paddingY="1.5rem"
      spacing="0px"
    >
      <Stack //Card
        w="full"
        h="full"
        minW="28rem"
        spacing=".5rem"
        // layerStyle="card"
        padding="0"
      >
        <Text textStyle="cardHeader" color="gray.500">
          User profile
        </Text>
        <Stack // User Info
          direction="row"
          justify="start"
          align="start"
          spacing="1rem"
          layerStyle="card"
          paddingX="1.5rem"
        >
          <Stack spacing=".25rem" flex={0.75}>
            <EditableField
              field="FirstName"
              label="First Name"
              stateValue={FirstName}
              seter={setFirstName}
              submit={handleSubmit}
            />
            <EditableField
              field="LastName"
              label="Last Name"
              stateValue={LastName}
              seter={setLastName}
              submit={handleSubmit}
            />
            <EditableField
              field="Email"
              label="Email"
              stateValue={Email}
              seter={setEmail}
              submit={handleSubmit}
            />
          </Stack>
          <Stack
            w="full"
            padding="1rem"
            justify="center"
            align="center"
            flex={0.25}
          >
            <Avatar
              size="2xl"
              name={`${FirstName} ${LastName}`}
              src={stateImage}
            />
            <Stack>
              <ButtonGroup
                justifyContent="center"
                size="xs"
                variant="outline"
                style={edit && file ? {} : { display: "none" }}
              >
                <IconButton bg="green" onClick={handleSubmitImage} />
                <IconButton bg="red" onClick={cancelImageEdit} />
              </ButtonGroup>

              <Button
                position="relative"
                overflow="hidden"
                size="sm"
                onClick={() => setEdit(true)}
                style={!edit || !file ? {} : { display: "none" }}
                colorScheme="blue"
              >
                Edit image
                <ImageUpload setFile={setFile} setStateImage={setStateImage} />
              </Button>
            </Stack>
          </Stack>
        </Stack>

        {/* <Divider /> */}

        <Text textStyle="cardHeader" color="gray.500" marginTop="1rem">
          Subscription
        </Text>
        <Stack //Subscription
          justify="flex-start"
          align="flex-start"
          spacing="1rem"
          alignSelf="stretch"
          layerStyle="card"
          paddingX="1.5rem"
        >
          <Text fontSize="md">Premium user to {"28/09/2023"}</Text>
          <Button size="sm" colorScheme="blue">
            Subscribe
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Settings;

const EditableField = ({ field, label, stateValue, seter, submit }) => {
  const EditableControls = () => {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls();

    return isEditing ? (
      <ButtonGroup justifyContent="center" size="xs" variant="outline">
        <IconButton opacity={0} disabled={true} cursor="default" />
        <IconButton {...getSubmitButtonProps()} bg="green" />
        <IconButton {...getCancelButtonProps()} bg="red" />
      </ButtonGroup>
    ) : (
      <Flex justifyContent="center">
        <IconButton
          {...getEditButtonProps()}
          icon={<Icon as={edit} />}
          size="xs"
          // bg="gray"
        />
      </Flex>
    );
  };

  return (
    <Editable
      textAlign="start"
      isPreviewFocusable={false}
      selectAllOnFocus={false}
      value={stateValue}
      onChange={(value) => seter(value)}
      onSubmit={(value) => submit(value, field)}
      onCancel={() => console.log("cancelado")}
      submitOnBlur={false}
      w="13rem"
      h="4rem"
      spacing=".5rem"
    >
      <Stack direction="row" spacing=".5rem" align="start">
        <Text fontSize="md" fontWeight="semibold">
          {label}
        </Text>
        <EditableControls />
      </Stack>
      <Stack fontSize="sm">
        <EditablePreview h="1.5rem" />
        <Input
          as={EditableInput}
          variant="flushed"
          boxSizing="border-box"
          h="1.5rem"
        />
      </Stack>
    </Editable>
  );
};

const ImageUpload = ({ setFile, setStateImage }) => (
  <label
    style={{
      position: "absolute",
      height: "100%",
      width: "100%",
      overflow: "hidden",
    }}
  >
    <span
      style={{
        position: "absolute",
        height: "100%",
        width: "100%",
        overflow: "hidden",
      }}
    ></span>
    <input
      style={{ display: "none" }}
      type="file"
      accept="image/*"
      onChange={(e) => {
        setFile(e.target.files);
        let local = e.target.files;
        if (local) {
          setStateImage(URL.createObjectURL(local[0]));
        }
      }}
    />
  </label>
);
