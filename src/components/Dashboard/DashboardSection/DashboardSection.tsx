import SectionLayout from "shared/dashboard/SectionLayout";
import IconCard from "assets/dashboard/IconCard.png";
import IconHeart from "assets/dashboard/IconHeart.png";
import IconPerson from "assets/dashboard/IconPerson.png";
import IconZoom from "assets/dashboard/IconZoom.png";
import { Wrapper } from "./AnimalStatisticCardWrapper";
import { Card } from "./AnimalStatisticCard";

const DashboardSection = () => (
  <SectionLayout>
    <Wrapper>
      <Card>
        <img src={IconCard} alt="" />
        <div>
          <p>Karty zwierząt</p>
          <span>235</span>
        </div>
      </Card>
      <Card>
        <img src={IconZoom} alt="" />
        <div>
          <p>Szuka właściciela</p>
          <span>35</span>
        </div>
      </Card>
      <Card>
        <img src={IconPerson} alt="" />
        <div>
          <p>Z właścicielem</p>
          <span>200</span>
        </div>
      </Card>
      <Card>
        <img src={IconHeart} alt="" />
        <div>
          <p>Wolontariat (ilość osób)</p>
          <span>22</span>
        </div>
      </Card>
    </Wrapper>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt autem error
    nostrum beatae quas! Fugit vitae, ea praesentium error eligendi repellat!
    Magni nisi laboriosam et molestias, cum totam vel, deserunt sed praesentium
    aperiam ipsum officiis similique deleniti ut est repellat.
  </SectionLayout>
);

export default DashboardSection;
