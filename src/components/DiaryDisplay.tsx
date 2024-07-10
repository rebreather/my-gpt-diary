import {
    DiaryContainer,
    ResultTitle,
    Divider,
    CardContainer,
    CardTitle,
    CardContent,
    ActionListItem,
  } from "./CommonStyles";
  
  import {
    LoadingOutlined,
    CheckCircleTwoTone,
    HeartTwoTone,
    SmileTwoTone,
    MessageTwoTone,
    SoundTwoTone,
  } from "@ant-design/icons";
  import { Diary } from "../types/diary";

    const DiaryDisplay = ({ data, isLoading }: { data: Diary, isLoading: boolean}) => {
    return (
      <DiaryContainer>
        {isLoading && (
          <>
            불러오는중...
            <LoadingOutlined />
          </>
        )}
        <ResultTitle>{data.title}</ResultTitle>
  
        <Divider />
        <CardContainer>
          <CardTitle>
            <CheckCircleTwoTone
              twoToneColor="#FF9AA2"
              style={{ marginRight: "6px" }}
            />
            요약
          </CardTitle>
          <CardContent>{data.summary}</CardContent>
        </CardContainer>
  
        <Divider />
        <CardContainer>
          <CardTitle>
            <HeartTwoTone twoToneColor="#FFB7B2" style={{ marginRight: "0.6rem" }} />
            감성일기장
          </CardTitle>
          <CardContent>{data.emotional_content}</CardContent>
        </CardContainer>
  
        <Divider />
        <CardContainer>
          <CardTitle>
            <SmileTwoTone twoToneColor="#FFDAC1" style={{ marginRight: "0.6rem" }} />
            내가 느낀 감정
          </CardTitle>
          <CardContent>{data.emotional_result}</CardContent>
        </CardContainer>
  
        <Divider />
        <CardContainer>
          <CardTitle>
            <MessageTwoTone
              twoToneColor={"#B5EAD7"}
              style={{ marginRight: "0.6rem" }}
            />
            심리 분석
          </CardTitle>
          <CardContent>{data.analysis}</CardContent>
        </CardContainer>
  
        <Divider />
        <CardContainer>
          <CardTitle>
            <SoundTwoTone twoToneColor="#C7CEEA" style={{ marginRight: "0.6rem" }} />
            GPT 조언
          </CardTitle>
          <CardContent>
            {data.action_list.map((action: string, index: number) => (
              <ActionListItem key={index}>{action}</ActionListItem>
            ))}
          </CardContent>
        </CardContainer>
      </DiaryContainer>
    );
  };
  
  export default DiaryDisplay;