import Header from "../components/header/Header";
import TagsContainer from "../components/tagsContainer/TagsContainer";

const App = () => (
  <>
    <Header fontColor="white" bgrColor="dodgerblue" iconSrc="/assets/logo.svg">
      STACKOVERFLOW'S TAGS LIST
    </Header>
    <TagsContainer></TagsContainer>
  </>
);

export default App;
