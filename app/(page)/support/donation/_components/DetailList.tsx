import { CONST } from '@/lib/constants';

import CommonSupportLayout from '../../_components/CommonSupportLayout';
import TitleArea from '../../_components/TitleArea';

function DetailList() {
  const contents = CONST.SUPPORT_CONTENT.DONATION_CONTENT;
  return (
    <>
      <TitleArea
        label={contents.label}
        updateDate={contents.updateDate}
        link="https://docs.google.com/forms/d/e/1FAIpQLSf4PlkHgQ4k1gAw7diOV2KHRsQol1i0OzmcxBrYZbfO57UYdg/viewform"
        linkTxt="모금 후 정보입력 바로가기"
      />
      <CommonSupportLayout
        uniqueId={contents.uniqueId}
        tabContent={contents.content}
      />
    </>
  );
}

export default DetailList;
