import Cube from '@/components/cube';
import SectionBadge from '@/components/section-badge';
import SectionContent from '@/components/section-content';
import SectionHeader from '@/components/sectoin-header';
import Wrapper from '@/components/wrapper';
import IntegrateData from '@/data/integration.json';
import TechData from '@/data/technologies.json';
import type { CSSVariables } from '@/types/global';
import { Code2 } from 'lucide-react';
import { Activity, useState, type ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

const tabs = ['Core', 'Add-on'];

const Technologies = () => {
  const [activeTab, setActiveTab] = useState('Core');
  return (
    <>
      <SectionBadge Icon={Code2} title="Ecosystem" />
      <SectionHeader
        title="Technologies behind the results"
        description="I've honed my skills in web app technologies and can provide a wide range of services to help you build amazing web solutions"
      />

      {/* showcase */}
      <SectionContent className="mb-14 lg:mb-18">
        <div className="pad-x">
          <div className="flex gap-4 border-b">
            {tabs.map((tab) => (
              <label
                htmlFor=""
                key={`tab-${tab}`}
                className={twMerge(
                  'border-b-2 border-b-transparent pb-4 text-muted-foreground',
                  activeTab === tab && 'border-b-foreground font-medium text-foreground',
                )}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </label>
            ))}
          </div>
        </div>

        {/* Tech */}
        <Activity mode={activeTab === 'Core' ? 'visible' : 'hidden'}>
          <Wrapper className="mt-9 lg:mt-12" hidden={activeTab !== 'Core'}>
            {Object.entries(TechData).map(([group, data]) => (
              <Row key={`tech-group-${group}`}>
                <GroupColumn name={group} />
                <ItemsColumn>
                  {data?.map((tech) => (
                    <a href={tech.url} target="_blank" rel="noopener noreferrer" key={`technology-${tech.name}`}>
                      <CubeWrapper>
                        <Cube
                          name={tech.name}
                          icon={tech.icon}
                          style={
                            {
                              '--cube-color': `${tech.color}`,
                              '--cube-base': '0.9rem',
                            } as CSSVariables
                          }
                          className="ms-4 mt-6"
                        />
                        <CubeDetails name={tech.name} type={tech.type} />
                      </CubeWrapper>
                    </a>
                  ))}
                </ItemsColumn>
              </Row>
            ))}
          </Wrapper>
        </Activity>

        {/* Integrate */}
        <Activity mode={activeTab === 'Add-on' ? 'visible' : 'hidden'}>
          <Wrapper className="mt-9 lg:mt-12" hidden={activeTab !== 'Add-on'}>
            {Object.entries(IntegrateData).map(([group, data]) => (
              <Row key={`int-group-${group}`}>
                <GroupColumn name={group} />
                <ItemsColumn>
                  {data?.map((tech) => (
                    <a href={tech.url} target="_blank" rel="noopener noreferrer" key={`integrate-${tech.name}`}>
                      <CubeWrapper>
                        <Cube
                          name={tech.name}
                          icon={tech.icon}
                          variant="thin"
                          style={
                            {
                              '--cube-color': `${tech.color}`,
                              '--cube-base': '0.9rem',
                            } as CSSVariables
                          }
                          className="ms-4 mt-6"
                        />
                        <CubeDetails name={tech.name} type={tech.type} />
                      </CubeWrapper>
                    </a>
                  ))}
                </ItemsColumn>
              </Row>
            ))}
          </Wrapper>
        </Activity>
      </SectionContent>
    </>
  );
};

export default Technologies;

const Row = ({ children }: { children: ReactNode }) => {
  return <div className="col-span-12 grid not-last:pb-12 lg:grid-cols-[16ch_1fr]">{children}</div>;
};

const GroupColumn = ({ name }: { name: string }) => {
  return (
    <div>
      <p className="font-medium capitalize">{name}</p>
    </div>
  );
};

const ItemsColumn = ({ children }: { children: ReactNode }) => {
  return (
    <div className="hide-scrollbar overflow-x-scroll pt-4 lg:overflow-visible lg:pt-0">
      <div className="grid min-w-2xl grid-cols-[repeat(auto-fit,20ch)] gap-x-4 gap-y-6 lg:min-w-auto">{children}</div>
    </div>
  );
};
const CubeWrapper = ({ children }: { children: ReactNode }) => {
  return <div className="group flex cursor-pointer gap-x-3">{children}</div>;
};

const CubeDetails = ({ name, type }: { name: string; type: string }) => {
  return (
    <div>
      <p className="max-w-[12ch] truncate">{name}</p>
      <small className="block max-w-[16ch] truncate text-muted-foreground">{type}</small>
    </div>
  );
};
