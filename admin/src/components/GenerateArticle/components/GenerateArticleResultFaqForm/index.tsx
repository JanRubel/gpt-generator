import React, { useState, type ChangeEvent, Dispatch } from "react";
import {
  Textarea,
  AccordionGroup,
  Accordion,
  AccordionContent,
  AccordionToggle,
  Box,
} from "@strapi/design-system";

import type { IFaqResponse } from "../../../../../../shared";
import {
  ResultAction,
  type IAction,
} from "../GenerateArticleResultForm/GenerateArticleResultForm.reducer";

import * as S from "./GenerateArticleResultFaqForm.styled";

interface IProps {
  faq: IFaqResponse[];
  disabled: boolean;
  dispatch: Dispatch<IAction>;
}

const GenerateArticleResultFaqForm = ({ faq, disabled, dispatch }: IProps) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setExpandedId((s) => (s === id ? null : id));
  };

  return (
    <AccordionGroup label="faq">
      {faq &&
        faq.map((item, index) => (
          <Accordion
            key={`Faq-${index}`}
            expanded={expandedId === index}
            onToggle={() => handleToggle(index)}
            size="S"
            id={`acc-${index}`}
          >
            <AccordionToggle title={item.question} togglePosition="left" />
            <AccordionContent>
              <Box padding={3}>
                <S.FaqWrapper>
                  <Textarea
                    name={`faq_question_${index}`}
                    label="question"
                    value={item.question}
                    disabled={disabled}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      dispatch({
                        type: ResultAction.SET_FAQ_QUESTION,
                        payload: {
                          index,
                          value: e.target.value,
                        },
                      })
                    }
                  />
                  <Textarea
                    name={`faq_answer_${index}`}
                    label="answer"
                    value={item.answer}
                    disabled={disabled}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                      dispatch({
                        type: ResultAction.SET_FAQ_ANSWER,
                        payload: {
                          index,
                          value: e.target.value,
                        },
                      })
                    }
                  />
                </S.FaqWrapper>
              </Box>
            </AccordionContent>
          </Accordion>
        ))}
    </AccordionGroup>
  );
};

export default GenerateArticleResultFaqForm;
