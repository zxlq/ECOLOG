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
    maxWidth: 643,
    margin: "auto",
    borderRadius: 12,
    padding: 12,
    height: 600
  },
  media: {
    borderRadius: 6
  }
}));

export const A_LogCreditsCard = React.memo(function MusicCard() {
  const styles = useStyles();
  const mediaStyles = useFourThreeCardMediaStyles();
  const textCardContentStyles = useN04TextInfoContentStyles();
  const shadowStyles = useOverShadowStyles({ inactive: true });
  return (
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia
        className={cx(styles.media, mediaStyles.root)}
        image={"https://images.unsplash.com/photo-1526078569927-a1255bd01079?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"}
        
      />
      <CardContent>
        <TextInfoContent
          classes={textCardContentStyles}
          overline={"EcoLog"}
          heading={"LOG YOUR CREDITS"}
          body={
            "You can log you credits here!"
          }
        />
      </CardContent>
    </Card>
  );
});
export default A_LogCreditsCard;
