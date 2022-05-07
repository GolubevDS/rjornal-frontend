import { Avatar, Box, Button, Paper, Typography } from '@mui/material';
import MessageIcon from '@mui/icons-material/TextsmsOutlined';
import UserAddIcon from '@mui/icons-material/PersonAddOutlined';

import { ArticleActions } from '@/components/ArticleActions';

import styles from './Content.module.scss';

/** Содержимое статьи. */
export const Content = (): JSX.Element => {
    return (
        <Paper className={styles.root} elevation={0}>
            <div className="container" >
                <Typography className={styles.title} variant="h4">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, ut!
                </Typography>
                <div className={styles.text}>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, esse sit amet illo, voluptatibus aspernatur assumenda eveniet tempora asperiores, ea cum soluta iure perspiciatis accusamus quibusdam voluptates consequuntur dolor sunt.
                    </Typography>
                    <Typography>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit tempora, ipsam temporibus sunt nisi possimus pariatur dolorem atque omnis, repudiandae nemo tenetur dignissimos sit esse quibusdam laudantium ratione molestiae qui ut ex aut fuga. Atque, temporibus officia. Qui delectus earum in alias asperiores minima, eaque dolor? Animi est perferendis et?
                    </Typography>

                    <div className={styles.actionsWrapper}>
                        <ArticleActions />
                    </div>

                    <Box className={styles.cardEntry} display="flex" justifyContent="space-between" alignItems="center">
                        <div className={styles.userInfo}>
                            <Avatar
                                className={styles.avatar}
                                src="https://leonardo.osnova.io/ea5d3f52-093c-5ee6-b0fd-91167dad35b1/-/scale_crop/200x200/-/format/webp"
                                variant="rounded"
                            />
                            <b>Donnie Darko</b>
                            <span>+1685</span>
                        </div>
                        <div>
                            <Button variant="contained">
                                <MessageIcon />
                            </Button>
                            <Button className={styles.subscribeButton} color="secondary" startIcon={<UserAddIcon />} variant="contained">
                                <b>Подписаться</b>
                            </Button>
                        </div>
                    </Box>
                </div>
            </div>
        </Paper>
    );
};

Content.displayName = 'widgets/Article/Content';
