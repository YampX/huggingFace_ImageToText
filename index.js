import { HfInference } from "@huggingface/inference";
import { config } from "dotenv";

config();

const hf = new HfInference(process.env.HFTOKEN);

const imageURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr79XufHLHCyEJK5voP0WLRcckv9LhQbn4CiYIq7V9bg&s";

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
