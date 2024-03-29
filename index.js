import { HfInference } from "@huggingface/inference";
import { config } from "dotenv";

config();

const hf = new HfInference(process.env.HFTOKEN);

const imageURL = "https://i.pinimg.com/736x/64/08/53/6408533a7fecacc898d050beccf515c4.jpg";

const response = await fetch(imageURL);
const blob = await response.blob();
const result = await hf.imageToText({
  data: blob,
  model: "Salesforce/blip-image-captioning-large",
});

const translation = await hf.translation({
  model: "Helsinki-NLP/opus-mt-en-es",
  inputs: result.generated_text,
  parameters: {
    src_lang: "en",
    tgt_lang: "es",
  },
});

console.log(result);
console.log(translation);
