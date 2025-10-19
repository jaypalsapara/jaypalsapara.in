import Cube from '@/components/cube';
import Wrapper from '@/components/wrapper';
import TechStacks from '@/data/tech-stacks.json';
import Technologies from '@/data/technologies.json';
import type { CSSVariables } from '@/types/global';

const TechStack = () => {
  const Techs = Object.values(Technologies).flatMap((data) => data);
  return (
    <Wrapper className="px-0 lg:gap-x-0 lg:px-0">
      {TechStacks.map((data, indexTechStacks) => (
        <div
          key={`techstack-${indexTechStacks}`}
          className="pad-x col-span-4 py-8 not-first:border-t lg:col-span-6 lg:py-12 lg:not-first:border-t-0 lg:not-last:border-e"
        >
          <p className="font-medium">{data.name}</p>
          <p className="text-muted-foreground">{data.text}</p>
          <div className="mt-7 flex flex-wrap gap-x-4 gap-y-4">
            {Techs.filter((tech) => data.tech.includes(tech.id)).map((stack) => (
              <div className={`order-${data.tech.indexOf(stack.id) + 1}`} key={`stack-${indexTechStacks}-${stack.id}`}>
                <Cube
                  name={stack.name}
                  icon={stack.icon}
                  style={
                    {
                      '--cube-color': `${stack.color}`,
                      '--cube-base': '0.9rem',
                    } as CSSVariables
                  }
                  className={`ms-4 mt-6`}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </Wrapper>
  );
};

export default TechStack;
