import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

function Post({ imagePost }) {
    return (
        <Card sx={{marginBottom: 5}}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: '#999' }} aria-label="recipe">
                        NH
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Nguyễn Nhựt Huy"
                subheader="September 14, 2023"
            />
            <CardMedia
                component="img"
                image={imagePost}
                alt="Image post"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Checkbox
                        icon={<FavoriteBorderIcon />}
                        checkedIcon={<FavoriteIcon sx={{ color: 'red' }} />}
                    />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Post