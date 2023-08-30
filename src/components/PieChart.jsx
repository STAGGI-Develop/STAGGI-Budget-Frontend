import { ResponsivePie } from "@nivo/pie";

const CenteredMetric = ({ dataWithArc, centerX, centerY }) => {
  let total = 0;
  dataWithArc.forEach((datum) => {
    total += datum.value;
  });

  return (
    <text
      x={centerX}
      y={centerY}
      textAnchor="middle"
      dominantBaseline="central"
      style={{
        fontSize: "1.1rem",
        fontWeight: 450,
        color: "lightgray",
      }}
    >
      {`Total `}
      {`$${total}`}
    </text>
  );
};
const MyResponsivePie = ({data}) => (
  <ResponsivePie
    theme={{
      text: {
        fontSize: "1.5rem",
        fontWeight: "600",
        fill: "#333333",
      },
    }}
    data={data}
    margin={{ top: 72, right: 72, bottom: 72, left: 72 }}
    // margin={{ top: 48, right: 48, bottom: 48, left: 48 }}
    valueFormat=" >-$,"
    sortByValue={true}
    innerRadius={0.45}
    padAngle={1}
    cornerRadius={2}
    activeOuterRadiusOffset={8}
    // colors={{ scheme: "pastel1" }}
    // colors={{ scheme: 'pink_yellowGreen' }}
    // colors={{ scheme: 'purple_blue' }}
    colors={{ scheme: "pastel2" }}
    borderWidth={1}
    borderColor={{
      from: "color",
      modifiers: [["darker", 0.2]],
    }}
    enableArcLinkLabels={false}
    arcLabel="label"
    // arcLabel={e=>`${e.id.toUpperCase()}`}
    // arcLabel={e=>`${e.id} (${e.value})`}
    // arcLabelsComponent={({ datum, label }) => (
    //   <text
    //     textAnchor="middle"
    //     dominantBaseline="central"
    //     style={{
    //       fontSize: "1rem",
    //       fontWeight: 800,
    //     }}
    //   >
    //     {`${label}`}
    //   </text>
    // )}
    // arcLabelsComponent={({ datum, label, style }) => (
    //   <text
    //     textAnchor="middle"
    //     dominantBaseline="central"
    //     fill={style.textColor}
    //     style={{
    //       fontSize: 25,
    //       fontWeight: 800,
    //     }}
    //   >
    //     {label}
    //   </text>
    // )}
    arcLabelsSkipAngle={9}
    arcLabelsTextColor="#1c1c1c"
    // arcLabelsTextColor={{
    //   from: "color",
    //   modifiers: [["darker", 3]],
    // }}
    layers={["arcs", "arcLabels", "arcLinkLabels", "legends", CenteredMetric]}
    tooltip={({ datum: { label, value, color } }) => (
      <div
        style={{
          padding: ".5rem",
          borderRadius: ".3rem",
          fontSize: ".7rem",
          color: "white",
          background: "var(--chakra-colors-pink-500)",
        }}
      >
        <strong>
          {label}: ${value * 3}
        </strong>
        <br />
        <span>
          {"Most expensive"}: ${value}
        </span>
      </div>
    )}
    // tooltip={(e) => {
    //   let { datum: t } = e;
    //   return n.createElement(
    //     l,
    //     { style: { color: t.color } },
    //     n.createElement(s, null, "id"),
    //     n.createElement(d, null, t.id),
    //     n.createElement(s, null, "value"),
    //     n.createElement(d, null, t.value),
    //     n.createElement(s, null, "formattedValue"),
    //     n.createElement(d, null, t.formattedValue),
    //     n.createElement(s, null, "color"),
    //     n.createElement(d, null, t.color)
    //   );
    // }}
    // defs={[
    //   {
    //     id: "dots",
    //     type: "patternDots",
    //     background: "inherit",
    //     color: "rgba(255, 255, 255, 0.3)",
    //     size: 4,
    //     padding: 1,
    //     stagger: true,
    //   },
    //   {
    //     id: "lines",
    //     type: "patternLines",
    //     background: "inherit",
    //     color: "rgba(255, 255, 255, 0.3)",
    //     rotation: -45,
    //     lineWidth: 6,
    //     spacing: 10,
    //   },
    // ]}
    // fill={[
    //   {
    //     match: {
    //       id: "rust",
    //     },
    //     id: "dots",
    //   },
    //   {
    //     match: {
    //       id: "c",
    //     },
    //     id: "dots",
    //   },
    //   {
    //     match: {
    //       id: "go",
    //     },
    //     id: "dots",
    //   },
    //   {
    //     match: {
    //       id: "python",
    //     },
    //     id: "dots",
    //   },
    //   {
    //     match: {
    //       id: "scala",
    //     },
    //     id: "lines",
    //   },
    //   {
    //     match: {
    //       id: "lisp",
    //     },
    //     id: "lines",
    //   },
    //   {
    //     match: {
    //       id: "elixir",
    //     },
    //     id: "lines",
    //   },
    //   {
    //     match: {
    //       id: "javascript",
    //     },
    //     id: "lines",
    //   },
    // ]}
    // legends={[]}
  />
);

export default MyResponsivePie;
