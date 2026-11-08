const assetPathPrefix = "./assets";
const imgFinal1 = `${assetPathPrefix}/b96a2.png`;
const imgSlide11 = `${assetPathPrefix}/48265.png`;
const imgComplete2 = `${assetPathPrefix}/40ef3.png`;
const imgWiraRytr2 = `${assetPathPrefix}/30348.png`;
const img12131 = `${assetPathPrefix}/a59e6.png`;
const imgEid1 = `${assetPathPrefix}/fd4bb.png`;
const imgFifinanal1 = `${assetPathPrefix}/5a923.png`;
const imgImu1 = `${assetPathPrefix}/5a181.png`;

type Component9Props = {
  className?: string;
  property1?: "final 1" | "Slide 1 1" | "complete 2" | "Wira_RYTR 2" | "1213 1" | "eid 1" | "fifinanal 1" | "imu 1";
};

function Component9({ className, property1 = "final 1" }: Component9Props) {
  const is12131 = property1 === "1213 1";
  const isComplete2 = property1 === "complete 2";
  const isEid1 = property1 === "eid 1";
  const isFifinanal1 = property1 === "fifinanal 1";
  const isImu1 = property1 === "imu 1";
  const isSlide11 = property1 === "Slide 1 1";
  const isWiraRytr2 = property1 === "Wira_RYTR 2";
  return (
    <div className={className || `relative ${isEid1 ? "h-[428.5px] w-[293.342px]" : is12131 ? "h-[428px] w-[294px]" : ["Wira_RYTR 2", "fifinanal 1", "imu 1"].includes(property1) ? "h-[426.637px] w-[293.75px]" : isSlide11 ? "h-[428.5px] w-[294.343px]" : "h-[428.5px] w-[293.657px]"}`} id={isImu1 ? "node-755_975" : isFifinanal1 ? "node-755_976" : isEid1 ? "node-755_977" : is12131 ? "node-755_978" : isWiraRytr2 ? "node-755_979" : isComplete2 ? "node-755_980" : isSlide11 ? "node-755_981" : "node-755_982"}>
      {["Slide 1 1", "complete 2", "1213 1", "fifinanal 1"].includes(property1) && (
        <div className="absolute flex inset-0 items-center justify-center" id={isFifinanal1 ? "node-755_973" : is12131 ? "node-755_971" : isComplete2 ? "node-755_969" : "node-755_968"} style={{ containerType: "size" }}>
          <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
            {isSlide11 && (
              <div className="relative rounded-[20px] size-full" data-name="Slide 1 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgSlide11} />
              </div>
            )}
            {isComplete2 && (
              <div className="relative rounded-[20px] size-full" data-name="complete 2">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgComplete2} />
              </div>
            )}
            {is12131 && (
              <div className="relative rounded-[20px] size-full" data-name="1213 1">
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
                  <img alt="" className="absolute h-[99.91%] left-[0.14%] max-w-none top-0 w-[103.29%]" src={img12131} />
                </div>
              </div>
            )}
            {isFifinanal1 && (
              <div className="relative rounded-[20px] size-full" data-name="fifinanal 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgFifinanal1} />
              </div>
            )}
          </div>
        </div>
      )}
      {property1 === "final 1" && (
        <div className="absolute inset-0 rounded-[20px]" data-node-id="755:967" data-name="final 1">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
            <img alt="" className="absolute h-[99.88%] left-[-8.34%] max-w-none top-0 w-[116.6%]" src={imgFinal1} />
          </div>
        </div>
      )}
      {isWiraRytr2 && (
        <div className="absolute inset-0 rounded-[20px]" data-node-id="755:970" data-name="Wira_RYTR 2">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgWiraRytr2} />
        </div>
      )}
      {isEid1 && (
        <div className="absolute inset-0 rounded-[20px]" data-node-id="755:972" data-name="eid 1">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
            <img alt="" className="absolute h-[99.88%] left-[-8.32%] max-w-none top-0 w-[116.72%]" src={imgEid1} />
          </div>
        </div>
      )}
      {isImu1 && (
        <div className="absolute inset-0 rounded-[20px]" data-node-id="755:974" data-name="imu 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgImu1} />
        </div>
      )}
    </div>
  );
}

type Frame48096225Props = {
  className?: string;
  property1?: "Default" | "Variant2" | "Variant4" | "Variant3" | "Variant6" | "Variant5" | "Variant8" | "Variant7" | "Variant10" | "Variant9" | "Variant12" | "Variant11" | "Variant14" | "Variant13" | "Variant16" | "Variant15";
};

export default function Frame48096225({ className, property1 = "Default" }: Frame48096225Props) {
  const isVariant10 = property1 === "Variant10";
  const isVariant11 = property1 === "Variant11";
  const isVariant12 = property1 === "Variant12";
  const isVariant13 = property1 === "Variant13";
  const isVariant14 = property1 === "Variant14";
  const isVariant15 = property1 === "Variant15";
  const isVariant16 = property1 === "Variant16";
  const isVariant2 = property1 === "Variant2";
  const isVariant3 = property1 === "Variant3";
  const isVariant4 = property1 === "Variant4";
  const isVariant5 = property1 === "Variant5";
  const isVariant6 = property1 === "Variant6";
  const isVariant7 = property1 === "Variant7";
  const isVariant8 = property1 === "Variant8";
  const isVariant9 = property1 === "Variant9";
  return (
    <div className={className || "h-[426.637px] overflow-clip relative rounded-[20px] w-[293.75px]"} id={isVariant15 ? "node-765_1214" : isVariant13 ? "node-765_1198" : isVariant11 ? "node-765_1182" : isVariant9 ? "node-765_1166" : isVariant7 ? "node-765_1150" : isVariant5 ? "node-765_1134" : isVariant3 ? "node-765_1118" : isVariant2 ? "node-755_989" : isVariant16 ? "node-765_1211" : isVariant14 ? "node-765_1195" : isVariant12 ? "node-765_1179" : isVariant10 ? "node-765_1163" : isVariant8 ? "node-765_1147" : isVariant6 ? "node-765_1131" : isVariant4 ? "node-765_1115" : "node-755_987"}>
      <Component9 className={`absolute left-0 top-0 ${isVariant9 ? "h-[428.5px] rounded-[20px] w-[294.343px]" : ["Variant7", "Variant11"].includes(property1) ? "h-[428.5px] rounded-[20px] w-[293.657px]" : isVariant5 ? "h-[428px] rounded-[20px] w-[294px]" : isVariant3 ? "h-[428.5px] rounded-[20px] w-[293.342px]" : ["Variant2", "Variant13", "Variant15"].includes(property1) ? "h-[426.637px] rounded-[20px] w-[293.75px]" : isVariant10 ? "h-[428.5px] w-[294.343px]" : ["Variant8", "Variant12"].includes(property1) ? "h-[428.5px] w-[293.657px]" : isVariant6 ? "h-[428px] w-[294px]" : isVariant4 ? "h-[428.5px] w-[293.342px]" : "h-[426.637px] w-[293.75px]"}`} property1={["Variant16", "Variant15"].includes(property1) ? "imu 1" : ["Variant14", "Variant13"].includes(property1) ? "Wira_RYTR 2" : ["Variant12", "Variant11"].includes(property1) ? "complete 2" : ["Variant10", "Variant9"].includes(property1) ? "Slide 1 1" : ["Variant6", "Variant5"].includes(property1) ? "1213 1" : ["Variant4", "Variant3"].includes(property1) ? "eid 1" : ["Default", "Variant2"].includes(property1) ? "fifinanal 1" : undefined} />
      <div className={`absolute left-0 w-[294px] ${["Variant2", "Variant3", "Variant5", "Variant7", "Variant9", "Variant11", "Variant13", "Variant15"].includes(property1) ? "bg-[#b3901b] h-[426px] opacity-70 rounded-[20px] top-[0.36px]" : "bg-[#ffd21e] h-[429px] opacity-0 top-0"}`} id={isVariant15 ? "node-765_1216" : isVariant13 ? "node-765_1200" : isVariant11 ? "node-765_1184" : isVariant9 ? "node-765_1168" : isVariant7 ? "node-765_1152" : isVariant5 ? "node-765_1136" : isVariant3 ? "node-765_1120" : isVariant2 ? "node-755_995" : isVariant16 ? "node-765_1213" : isVariant14 ? "node-765_1197" : isVariant12 ? "node-765_1181" : isVariant10 ? "node-765_1165" : isVariant8 ? "node-765_1149" : isVariant6 ? "node-765_1133" : isVariant4 ? "node-765_1117" : "node-755_993"} />
    </div>
  );
}