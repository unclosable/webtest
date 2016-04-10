package webtest;

import java.util.List;

import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.unclosable.webtest.dao.domain.SysUser;
import com.unclosable.webtest.dao.domain.SysUserExample;
import com.unclosable.webtest.dao.mapper.SysUserMapper;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = "classpath:applicationContext.xml")
public class TestHello {
	@Resource
	private SysUserMapper sysUserMapper;
	@Test
	public void databaseConnectionTest() {// 连接数据库的测试
		List<SysUser> users = this.sysUserMapper.selectByExample(new SysUserExample());
		for (SysUser user : users) {
			System.out.println(user.getName());
		}
	}
}
