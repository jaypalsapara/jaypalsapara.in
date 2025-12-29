import Button from '@/components/button';
import SectionBadge from '@/components/section-badge';
import SectionContent from '@/components/section-content';
import SectionHeader from '@/components/sectoin-header';
import Wrapper from '@/components/wrapper';
import AttachmentsData from '@/data/attachments.json';
import { Download, Paperclip } from 'lucide-react';

const Icons = {
  Download,
} as const;

type IconName = keyof typeof Icons;

export default function Attachments() {
  return (
    <>
      <SectionBadge Icon={Paperclip} title="Attachments" />
      <SectionHeader
        title="Here is my some attachments"
        description="I have attached the relevant files for your reference. Looking forward to your feedback."
      />
      <SectionContent className="mb-14 lg:mb-18">
        <Wrapper className="gap-y-12">
          {AttachmentsData.map((attachment) => {
            const IconName = attachment.icon as IconName;
            const Icon = Icons[IconName];
            return (
              <div className="col-span-3 flex flex-col" key={`attachment-${attachment.title}`} title={attachment.description}>
                <p>{attachment.title}</p>
                <small className="text-muted-foreground">{attachment.description}</small>
                <div className="mt-4">
                  <a href={attachment.url} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="small">
                      <Icon />
                      {attachment.buttontext}
                    </Button>
                  </a>
                </div>
              </div>
            );
          })}
        </Wrapper>
      </SectionContent>
    </>
  );
}
