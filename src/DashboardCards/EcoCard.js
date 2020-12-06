import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useFourThreeCardMediaStyles } from "@mui-treasury/styles/cardMedia/fourThree";
import { useN04TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n04";
import { useOverShadowStyles } from "@mui-treasury/styles/shadow/over";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 343,
    margin: "auto",
    borderRadius: 12,
    padding: 12,
    height: 600
  },
  media: {
    borderRadius: 6
  }
}));

export const EcoCard = React.memo(function MusicCard() {
  const styles = useStyles();
  const mediaStyles = useFourThreeCardMediaStyles();
  const textCardContentStyles = useN04TextInfoContentStyles();
  const shadowStyles = useOverShadowStyles({ inactive: true });
  return (
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia
        className={cx(styles.media, mediaStyles.root)}
        image={"https://images.unsplash.com/photo-1599940824399-b87987ceb72a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fHRyZWVzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"}
        
      />
      <CardContent>
        <TextInfoContent
          classes={textCardContentStyles}
          overline={"EcoLog"}
          heading={"Tree Planting Project"}
          body={
            "Our Clients have partnered with EcoLog to take action on the climate crisis by planting trees to offset our carbon footprint"
          }
        />
      </CardContent>
    </Card>
  );
});
export default EcoCard;
