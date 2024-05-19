import { useEffect, useState } from "react";
import { View } from "react-native";
import { Button, Card, TextInput } from "react-native-paper";
import useCreateSuggestion from "./hooks/useCreateSuggestion";
import { GlobalStyles } from "src/utils/Styles";

const Suggestions = () => {
  const [emailText, setEmailText] = useState<string>("");
  const [suggestText, setSuggestText] = useState<string>("");

  const {
    mutate: createSuggestion,
    isSuccess: suggestionSuccess,
    isLoading: suggestionLoading,
    error: suggestionError,
  } = useCreateSuggestion();

  useEffect(() => {
    if (suggestionSuccess) {
      setEmailText("");
      setSuggestText("");
    }
    console.log("Error en la sugerencia", suggestionError);
  }, [suggestionSuccess, suggestionError]);

  const handleCreateSuggestions = () => {
    const suggestion: Suggest = {
      email: emailText,
      suggest_text: suggestText,
    };

    if (emailText !== "" && suggestText !== "") {
      createSuggestion(suggestion);
    }
  };

  return (
    <View style={GlobalStyles.root}>
      <Card style={GlobalStyles.listItem}>
        <Card.Content>
          <TextInput
            style={GlobalStyles.textInput}
            mode="outlined"
            label="Correo"
            placeholder="Escribe tu email"
            value={emailText}
            onChangeText={(emailText) => setEmailText(emailText)}
          />
          <TextInput
            style={GlobalStyles.textInput}
            mode="outlined"
            label="Sugerencia"
            placeholder="Escribe tu sugerencia"
            value={suggestText}
            multiline={true}
            numberOfLines={3}
            onChangeText={(suggestText) => setSuggestText(suggestText)}
          />
          <Button
            mode="elevated"
            disabled={suggestionLoading}
            onPress={handleCreateSuggestions}
          >
            Enviar
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
};

export default Suggestions;
