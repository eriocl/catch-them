const express = require('express');

const router = express.Router();
const UsersController = require('../controllers/usersController');
const checkAuth = require('../middleware/checkAuth');
const uploadAvatar = require('../middleware/uploadAvatar');

router.route('/:id/tasks')
  .get(UsersController.getUserTasks);

router.route('/:id/stats')
  .get(UsersController.getStats);

router.route('/recommendation')
  .get(checkAuth, UsersController.getRecommendation);

router.route('/:id/reports')
  .get(UsersController.getUserReports);

router.route('/:id/followings')
  .get(UsersController.getFollowings);

router.route('/:id/followers')
  .get(UsersController.showFollowers);

router.route('/:id/follow')
  .post(checkAuth, UsersController.follow);

router.route('/:id/unfollow')
  .post(checkAuth, UsersController.unfollow);

router.route('/:id')
  .get(UsersController.getUser)
  .put(checkAuth, uploadAvatar, UsersController.edit);

module.exports = router;
