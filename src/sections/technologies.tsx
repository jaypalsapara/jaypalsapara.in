import Cube from '@/components/cube';
import SectionBadge from '@/components/section-badge';
import SectionContent from '@/components/section-content';
import SectionHeader from '@/components/sectoin-header';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/tabs';
import Wrapper from '@/components/wrapper';
import IntegrateData from '@/data/integration.json';
import TechData from '@/data/technologies.json';
import type { CSSVariables } from '@/types/global';
import { Code2 } from 'lucide-react';
import { type ReactNode } from 'react';

const Technologies = () => {
  return (
    <>
      <SectionBadge Icon={Code2} title="Ecosystem" />
      <SectionHeader
        title="Technologies behind the results"
        description="I've honed my skills in web app technologies and can provide a wide range of services to help you build amazing web solutions"
      />

      {/* showcase */}
      <SectionContent className="mb-14 lg:mb-18">
        <Tabs defaultValue="Core">
          <div className="pad-x">
            <TabsList>
              <TabsTrigger value="Core">Core</TabsTrigger>
              <TabsTrigger value="Add-on">Add-on</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="Core">
            <Wrapper className="mt-9 lg:mt-12">
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
          </TabsContent>
          <TabsContent value="Add-on">
            <Wrapper className="mt-9 lg:mt-12">
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
          </TabsContent>
        </Tabs>
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
